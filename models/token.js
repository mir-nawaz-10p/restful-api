'use strict';
// Dependencies
const restful = require('node-restful');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var tokenSchema = new Schema({
    username: { type: String, required: true},
  	password: { type: String, required: true },
    token: { type: String, required: true },
    status: { type: Boolean, required: true },
    created_at: { type: Date, default: Date.now }
});

// Return model
module.exports = restful.model('Tokens', tokenSchema);