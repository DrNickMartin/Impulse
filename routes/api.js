var express = require('express');
var router = express.Router();
var imageSearch = require('node-google-image-search');
var fs = require('fs');
var data = require('../data.json');

/* GET api data. */
router.get('/', function(req, res, next) {
  var results = imageSearch(req.query.search, callback, 0, 10);
  function callback(results) {
    res.json(results);
  }
  //res.json(data);
});

module.exports = router;
