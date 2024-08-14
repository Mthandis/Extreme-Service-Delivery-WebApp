const db = require('../config/db');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: 'Enter login credentials' });

    try {
        // Query to get the user by email
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

        if (rows.length === 0) return res.status(404).json({ message: 'User does not exist' });

        const user = rows[0];
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) return res.status(401).json({ message: 'Incorrect password' });

        let loggedUser = null;

        // Check role and get additional user data
        if (user.roleName === 'RESIDENT') {
            const [residentRows] = await db.query('SELECT * FROM residents WHERE email = ?', [email]);
            loggedUser = residentRows[0];
        } else if (user.roleName === 'ADMIN') {
            const [adminRows] = await db.query('SELECT * FROM admin WHERE email = ?', [email]);
            loggedUser = adminRows[0];
        }

        if (!loggedUser) return res.status(403).json({ message: 'Unauthorized access' });

        // Generate JWT token
        const token = jwt.sign(
            {
                id: loggedUser.userID,
                roleName: user.roleName,
            },
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
        );

        // Send response
        res.header('Authorization', `Bearer ${token}`).json({ user, token, loggedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { login };
