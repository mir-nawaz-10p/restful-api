'use strict';
const mongoose = require('mongoose');
const chalk = require('chalk');
module.exports = function() {
	// MongoDB
	mongoose.connect('mongodb://localhost/demo');
	const db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  console.log(chalk.green("we're connected!"));
	});
};
