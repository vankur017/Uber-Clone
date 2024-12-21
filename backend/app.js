const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const express = require('express');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');

connectToDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
