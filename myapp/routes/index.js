var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/jdjs', function (req, res, next) {
  res.render('pages/jdjs');
});
router.get('/qufujxd', function (req, res, next) {
  res.render('pages/qufujxd');
});
router.get('/zoucjxd', function (req, res, next) {
  res.render('pages/zoucjxd');
});
router.get('/jiaxjxd', function (req, res, next) {
  res.render('pages/jiaxjxd');
});
router.get('/jxly', function (req, res, next) {
  res.render('pages/jxly');
});
router.get('/rjsxjj', function (req, res, next) {
  res.render('pages/rjsxjj');
});

module.exports = router;
