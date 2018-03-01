/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(3);

	__webpack_require__(4);

	__webpack_require__(5);

	__webpack_require__(6);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Timer = function () {
		function Timer() {
			_classCallCheck(this, Timer);
		}

		_createClass(Timer, [{
			key: 'countdown',
			value: function countdown(end, update, handle) {
				var now = new Date().getTime();
				var self = this;
				if (now - end) {
					handle.call(self);
				} else {
					var last_time = end - now;
					var px_s = 1000;
					var px_m = 1000 * 60;
					var px_h = 1000 * 60 * 60;
					var px_d = px_h * 24;
					var d = math.floor(last_time / px_d);
					var h = math.floor((last_time - px_d * d) / px_h);
					var m = math.floor((last_time - px_d * d - px_h * h) / px_m);
					var s = math.floor((last_time - px_d * d - px_h * h - px_m * m) / px_s);
					var r = [];
					if (d > 0) {
						r.push('<em>' + d + '</em>\u5929');
					}
					if (r.length || h > 0) {
						r.push('<em>' + h + '</em>\u65F6');
					}
					if (r.length || m > 0) {
						r.push('<em>' + m + '</em>\u5206');
					}
					if (r.length || s > 0) {
						r.push('<em>' + s + '</em>\u79D2');
					}
					self.last_time = r.join();
					update.call(self, r.join(''));
					setTimeout(function () {
						self.countdown(end, update, handle);
					}, 1000);
				}
			}
		}]);

		return Timer;
	}();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";

/***/ })
/******/ ]);