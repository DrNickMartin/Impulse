var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("in index.js");
  res.render('index', {
    title: 'Impulse'
  });
});

module.exports = router;
