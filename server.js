const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
var fashionModel = require('./models/fashion');
var gadgetModel = require('./models/gadget');
var cookingModel = require('./models/cooking');
var healthModel = require('./models/health');

mongoose.connect('mongodb://localhost:27017/getmodish');

app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public/images')));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/fashion', function (req, res){
  fashionModel.find(function (err, data) {
  if (err) return console.error(err);
  res.json(data);

  });
});
app.get('/gadget', function (req, res){
  gadgetModel.find(function (err, data) {
  if (err) return console.error(err);
  res.json(data);

  });
});



app.post('/admin/fashion', function (req, res) {
  fashionData = fashionModel({
    heading : req.body.heading,
    image_url : req.body.image_url,
    desc: req.body.desc,
    source: req.body.source,
    keywords: req.body.keywords.split(',')
  });
  fashionData.save(function(err){
    if(err){
      console.log(err);
    }
  });
  res.end();
});
app.post('/admin/gadget', function (req, res) {
  gadgetData = gadgetModel({
    heading : req.body.heading,
    image_url : req.body.image_url,
    desc: req.body.desc,
    source: req.body.source,
    keywords: req.body.keywords.split(',')
  });
  gadgetData.save(function(err){
    if(err){
      console.log(err);
    }
  });
  res.end();
});
app.post('/admin/cooking', function (req, res) {
  cookingData = cookingModel({
    heading : req.body.heading,
    image_url : req.body.image_url,
    desc: req.body.desc,
    source: req.body.source,
    keywords: req.body.keywords.split(',')
  });
  cookingData.save(function(err){
    if(err){
      console.log(err);
    }
  });
  res.end();
});
app.post('/admin/health', function (req, res) {
  healthData = healthModel({
    heading : req.body.heading,
    image_url : req.body.image_url,
    desc: req.body.desc,
    source: req.body.source,
    keywords: req.body.keywords.split(',')
  });
  healthData.save(function(err){
    if(err){
      console.log(err);
    }
  });
  res.end();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
