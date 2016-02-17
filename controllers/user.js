'use strict';
const User = require('../models/users');
const Token = require('../models/token');
const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

module.exports = {
  signup,
  login,
  logout
};

function signup(req, res) {
	var user = new User(req.body);
	user.save(function(err){
		if (err) {
			res.status(403);
			res.send(err);
		}
		else{
			addNewToken(req, res);
		}
	});
}

function login(req, res){
	var query = {
		username: req.body.username, 
		password: req.body.password
	};
	User.findOne(query, function(err, doc){
		if (!doc || err) {
			res.status(403);
			res.send(err || {message: 'Wrong username or password'});
		}
		else{
			addNewToken(req, res);
		}
	});
}

function logout(req, res){
	var query = {token: req.headers.token, status: true};
	var update = {status: false};
	Token.findOneAndUpdate(query, update, function(err, doc) {
		if(!doc || err){
			res.status(403);
			res.send(err || {message: "user's token or state not found"});	
		}
		else{
			res.send({message: 'user logged out successfully'});	
		}
	});
}

function addNewToken(req, res){
	var token = new Token({
				username: req.body.username,
				password: req.body.password,
				token: randomString(50, chars),
				status: true
			});
		token.save(function(err){
			if (err){
				res.status(403);
				res.send(err);
			}
			else{
				res.send({token: token.token});
			}
		});
}

function randomString(length, chars){
	var result = '';
	for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}