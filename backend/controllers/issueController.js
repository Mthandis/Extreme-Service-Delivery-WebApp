const db = require('../config/db');

const reportIssue = async (req, res) => {
    const { location, description, issueCategory } = req.body;
    const residentID = req.user.id; // Get the user ID from the authenticated token

    if (!location || !description || !issueCategory) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Insert the new issue into the database, including the issueCategory
        await db.query(
            'INSERT INTO issue (residentID, location, description, status, dateReported, issueCategory) VALUES (?, ?, ?, ?, NOW(), ?)',
            [residentID, location, description, 'Pending', issueCategory]
        );

        res.status(201).json({ message: 'Issue reported successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { reportIssue };
