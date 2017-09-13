var mongoose = require('mongoose');

var gadgetSchema = mongoose.Schema({
  heading: String,
  image_url: String,
  desc : String,
  source: String,
  keywords: []

});

var gadgetModel = mongoose.model('gadget', gadgetSchema);

module.exports = gadgetModel;
