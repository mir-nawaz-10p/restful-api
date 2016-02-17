'use strict';
const Token = require('../models/token');

module.exports = {
  isAuthenticated,
  filterRes
};

function isAuthenticated(req, res, next) {
	var query = {
		token: req.headers.token, 
		status: true
	};
	Token.findOne(query, function(err, doc){
		if (!doc || err)
			return next(res.status(403).send({message: "Forbidden access"}));
		next();
	});			
}

function filterRes(req, res, next) {
	// filter the response data
	next();
}