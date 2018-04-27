var mongoose = require('mongoose');

// create a data model called Post
var dataSchema = new mongoose.Schema({
  title: String,
  body:String,
  img:String
});

module.exports = mongoose.model('Post', dataSchema);