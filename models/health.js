var mongoose = require('mongoose');

var healthSchema = mongoose.Schema({
  heading: String,
  image_url: String,
  desc : String,
  source: String,
  keywords: []

});

var healthModel = mongoose.model('health', healthSchema);

module.exports = healthModel;
