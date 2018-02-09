var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET sell page. */
router.get('/eladas', function(req, res, next) {
  res.render('sell-item');
});


module.exports = router;
