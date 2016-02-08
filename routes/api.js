
// Dependencies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// Models
var Product = require('../models/product');
var Blog = require('../models/blog');
var User = require('../models/users');
// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');
Blog.methods(['get', 'put', 'post', 'delete']);
Blog.register(router, '/blogs');
User.methods(['get', 'put', 'post', 'delete']);
User.route('recommend', function(req, res, next) {
	User.find({}, function (err, docs) {
  		if (err) next({ status: 404 });
        res.send(docs);
	});
}); // custom route for the api / api/users/recommend
User.before('get', function(req, res, next){
	console.log('before get call');
	next();
});
User.after('get', function(req, res, next){
	console.log('after get call');
	next();
});
User.register(router, '/users');

///////////////////////////////////////// 
/// Reference https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
/// 
// // create a new user
// var newUser = User({
//   name: 'Peter Quill 1',
//   username: 'starlord55 123',
//   password: 'password 321',
//   admin: true
// });

// // save the user
// newUser.save(function(err) {
//   if (err) throw err;

//   console.log('User created!');
// });

// // get all the users
// User.find({}, function(err, users) {
//   if (err) throw err;

//   // object of all the users
//   console.log(users);
// });

// // get the user starlord55
// User.find({ username: 'starlord55' }, function(err, user) {
//   if (err) throw err;

//   // object of the user
//   console.log(user);
// });
// // get a user with ID of 1
// User.findById('56b32c6d7189e7b03ff46307', function(err, user) {
//   if (err) throw err;

//   // change the users location
//   user.location = 'uk';

//   // save the user
//   user.save(function(err) {
//     if (err) throw err;

//     console.log('User successfully updated!');
//   });

// });

// Return router
module.exports = router;
