const db = require('../config/db');

const reportIssue = async (req, res) => {
    const { location, issueType, description } = req.body;
    const residentID = req.user.id; // Get the user ID from the authenticated token

    if (!location || !issueType || !description) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Insert the new issue into the database
        await db.query(
            'INSERT INTO issue (residentID, location, description, status, dateReported) VALUES (?, ?, ?, ?, NOW())',
            [residentID, location, description, 'Pending']
        );

        res.status(201).json({ message: 'Issue reported successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { reportIssue };
