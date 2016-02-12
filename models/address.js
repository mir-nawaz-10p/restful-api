'use strict';
// Dependencies
const restful = require('node-restful');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var addressSchema = new Schema({
    building: String,
    pincode: Number,
    city: String,
    state: String
});

// Return model
module.exports = restful.model('Addresses', addressSchema);