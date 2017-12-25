var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});

function getRouter(param) {
	param.forEach(x => {
		router.get('/' + x, function (req, res, next) {
			res.render('pages/' + x);
		});
	})
}
var params = ['jdjs','jxxczl', 'qufujxd', 'zoucjxd', 'jiaxjxd', 'jxly', 'rjsxjj','rjsxjj2', 'jxxczl'];
getRouter(params);

module.exports = router;
