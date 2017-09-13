var mongoose = require('mongoose');

var cookingSchema = mongoose.Schema({
  heading: String,
  image_url: String,
  desc : String,
  source: String,
  keywords: []

});

var cookingModel = mongoose.model('cooking', cookingSchema);

module.exports = cookingModel;
