const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/db');
const registerRoutes = require('./routes/registerRoutes');
const loginRoutes = require('./routes/loginRoutes');
const issueRoutes = require('./routes/issueRoutes');
const cors = require('cors');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, 
};

app.use(cors(corsOptions));

app.use('/api/auth/register', registerRoutes);
app.use('/api/auth', loginRoutes);
app.use('/api/issue', issueRoutes);

const PORT = process.env.PORT || 5000;

db.query('SELECT 1')
    .then(() => {
        console.log('Database connected..');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(error => console.log('Failed to connect to database.\n' + error.message));
