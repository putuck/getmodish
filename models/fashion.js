var mongoose = require('mongoose');

var fashionSchema = mongoose.Schema({
  heading: String,
  image_url: String,
  desc : String,
  source: String,
  keywords: []

});

var fashionModel = mongoose.model('fashion', fashionSchema);

module.exports = fashionModel;
