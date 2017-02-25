var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Impulse',
    canvas_width: 500,
    canvas_height: 350
  });
});

module.exports = router;
