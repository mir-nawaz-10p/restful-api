'use strict';
const FileStreamRotator = require('file-stream-rotator');
const fs = require('fs');
const morgan = require('morgan');

module.exports = function(app) {
	// create a write stream (in append mode)
	var logDirectory = __dirname + '/log';

	// ensure log directory exists
	fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

	// create a rotating write stream
	var accessLogStream = FileStreamRotator.getStream({
	  filename: logDirectory + '/access-%DATE%.log',
	  frequency: 'daily',
	  verbose: false,
	  date_format: "YYYY-MM-DD"
	});
	app.use(morgan('combined', {stream: accessLogStream}));
};
