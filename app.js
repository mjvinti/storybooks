const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();
const port = process.env.PORT || 3000;

// Passport Config
require('./config/passport')(passport);

// Load Routes
const auth = require('./routes/auth');

// Use Routes
app.use('/auth', auth);

app.get('/', (req, res) => {
	res.send('It works');
});

app.listen(port, () => {
	console.log(`Server started on ${port}`);
});