
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product');
var Blog = require('../models/blog');

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');
Blog.methods(['get', 'put', 'post', 'delete']);
Blog.register(router, '/blogs');

// Return router
module.exports = router;
