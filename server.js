'use strict';
// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const chalk = require('chalk');
// MongoDB
mongoose.connect('mongodb://localhost/demo');
const db = mongoose.connection;
db.once('open', function() {
  console.log(chalk.green("we're connected!"));
});
// Express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000);
console.log(chalk.blue('API is running on port'), chalk.green('3000'));
