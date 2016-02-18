'use strict';
// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const chalk = require('chalk');

// Express
const app = express();

// MongoDB
require('./bootstrap/mongoose.js')();

// setup the logger
require('./bootstrap/logger.js')(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Routes
require('./routes')(app);

// Start server
app.listen(3000);
console.log(chalk.blue('API is running on port'), chalk.green('3000'));
