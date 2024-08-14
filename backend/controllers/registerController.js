const bcrypt = require('bcryptjs');
const db = require('../config/db');

const registerResident = async (req, res) => {
    const { name, surname, address, email, contact, password } = req.body;

    if (!name || !surname || !address || !email || !contact || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check if the resident already exists
        const [userExist] = await db.query('SELECT * FROM residents WHERE email = ?', [email]);

        if (userExist.length > 0) {
            return res.status(409).json({ message: 'User already exists, Login instead' });
        }

        const roleName = 'RESIDENT';
        // Get the roleID for the roleName
        const [roleResult] = await db.query('SELECT roleID FROM roles WHERE roleName = ?', [roleName]);
        if (roleResult.length === 0) {
            return res.status(500).json({ message: 'Role not found' });
        }
        const roleID = roleResult[0].roleID;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert into residents table
        const [results] = await db.query(
            'INSERT INTO residents (name, surname, address, email, contact, password, roleID) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [name, surname, address, email, contact, hashedPassword, roleID]
        );

        // Insert into users table
        if(results.affectedRows > 0){
        await db.query(
            'INSERT INTO users (email, password, roleName) VALUES (?, ?, ?)',
            [email, hashedPassword, roleName]
        );
    }
        res.status(201).json({ message: 'Resident registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const registerAdmin = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check if the admin already exists
        const [userExist] = await db.query('SELECT * FROM admin WHERE email = ?', [email]);

        if (userExist.length > 0) {
            return res.status(409).json({ message: 'Admin already exists, Login instead' });
        }

        const roleName = 'ADMIN';
        // Get the roleID for the roleName
        const [roleResult] = await db.query('SELECT roleID FROM roles WHERE roleName = ?', [roleName]);
        if (roleResult.length === 0) {
            return res.status(500).json({ message: 'Role not found' });
        }
        const roleID = roleResult[0].roleID;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert into admin table
        await db.query(
            'INSERT INTO admin (name, email, password, roleID) VALUES (?, ?, ?, ?)',
            [name, email, hashedPassword, roleID]
        );

        // Insert into users table
        await db.query(
            'INSERT INTO users (email, password, roleName) VALUES (?, ?, ?)',
            [email, hashedPassword, roleName]
        );

        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { registerResident, registerAdmin };
