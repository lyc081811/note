var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});
// router.get('/jdjs', function (req, res, next) {
//   res.render('pages/jdjs');
// });
// router.get('/qufujxd', function (req, res, next) {
//   res.render('pages/qufujxd');
// });
// router.get('/zoucjxd', function (req, res, next) {
//   res.render('pages/zoucjxd');
// });
// router.get('/jiaxjxd', function (req, res, next) {
//   res.render('pages/jiaxjxd');
// });
// router.get('/jxly', function (req, res, next) {
//   res.render('pages/jxly');
// });
// router.get('/rjsxjj', function (req, res, next) {
//   res.render('pages/rjsxjj');
// });
// router.get('/jxxczl', function (req, res, next) {
//   res.render('pages/jxxczl');
// });

// function getRouter(url) {
// 	router.get('/' + url, function (req, res, next) {
// 		res.render('pages/' + url);
// 	});
// }


function getRouter() {
	Array.prototype.slice.apply(arguments).map(x => {
		router.get('/' + x, function (req, res, next) {
			res.render('pages/' + x);
		});
	})
}
getRouter('jdjs','jxxczl', 'qufujxd', 'zoucjxd', 'jiaxjxd', 'jxly', 'rjsxjj', 'jxxczl');

module.exports = router;
