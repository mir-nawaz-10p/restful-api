'use strict';
// Dependencies
const restful = require('node-restful');
const mongoose = restful.mongoose;
const Schema = mongoose.Schema;

// Schema
var productSchema = new Schema({
    name: String,
    sku: String,
    price: Number
});

// Return model
module.exports = restful.model('Products', productSchema);
