'use strict';

module.exports = {
  isAuthenticated,
  filterRes
};

function isAuthenticated(req, res, next) {
	// Checking user authentication
	next();
}

function filterRes(req, res, next) {
	// filter the response data
	next();
}