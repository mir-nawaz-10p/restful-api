'use strict';
// Dependencies
const express = require('express');
const router = express.Router();

// Models
const Product = require('../models/product');
const Blog = require('../models/blog');
const User = require('../models/users');
const Address = require('../models/address');
const Token = require('../models/token');
const auth = require('../controllers/auth.js');
const user = require('../controllers/user.js');
// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');
Blog.methods(['get', 'put', 'post', 'delete']);
Blog.register(router, '/blogs');
Address.methods(['get', 'put', 'post', 'delete']);
Address.register(router, '/address');
Token.methods(['get', 'put', 'post', 'delete']);
Token.register(router, '/token');

// -------------------------------------------------
User.methods(['get', 'put', 'post', 'delete']);
// custom route example e.g api/users/recommend
User.route('recommend', function(req, res, next) {
	User.find({}, function (err, docs) {
		if (err) next({ status: 404 });
		res.send(docs);
	});
});
// authentications
User.before('get', auth.isAuthenticated)
	.before('post', auth.isAuthenticated);
//data filtering
User.after('get', auth.filterRes)
	.after('post', auth.filterRes);

User.register(router, '/users');

router.post('/signup', user.signup);
router.post('/login', user.login);
router.get('/logout', user.logout);
// -------------------------------------------------

// Return router
module.exports = router;
