'use strict';
// Dependencies
const restful = require('node-restful');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: { type: Date, default: Date.now } }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

// Return model
module.exports = restful.model('Blogs', blogSchema);