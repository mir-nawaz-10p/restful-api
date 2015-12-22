
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;
var Schema = mongoose.Schema;

// Schema
var productSchema = new Schema({
    name: String,
    sku: String,
    price: Number
});

// Return model
module.exports = restful.model('Products', productSchema);
