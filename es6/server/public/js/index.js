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
/***/ (function(module, exports) {

	'use strict';

	{
		console.log(111); // 0b 二进制数开头
		console.log(501); // 0b 8进制数开头
	}
	{
		console.log('15', Number.isFinite(15)); // 是否无穷
		console.log('NaN', Number.isFinite(NaN)); // 是否无穷
		console.log(Number.isNaN(NaN));
	}
	{
		console.log(Number.isInteger(25.0)); // 是否是整数 .0也是整数
	}
	{
		console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Math.PI);
		console.log('10', Number.isSafeInteger(10)); // 是否在有效范围内
		console.log(Math.trunc(4.9)); // 只取整数部分
		console.log(Math.sign(-5), Math.sign(0), Math.sign(5), Math.sign('10'), Math.sign('a')); // 判断 -1  0 1 
		console.log(Math.cbrt(-1), Math.cbrt(8)); // 立方根
	}

/***/ })
/******/ ]);