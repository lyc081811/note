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

	// 正则扩展

	{
		// es5
		var reg = new RegExp('xyz', 'i');
		var reg2 = new RegExp(/xyz/i);
		console.log(reg.test('xyz123'), reg2.test('xyz123'));

		// es6
		var reg3 = new RegExp(/xyz/ig, 'i');
		console.log(reg3.flags); // .flags获取修饰符的属性
	}

	{
		var s = 'bbb_bb-b';
		var _reg = /b+/g;
		var _reg2 = new RegExp('b+', 'y');
		console.log('one', _reg.exec(s), _reg2.exec(s));
		console.log('two', _reg.exec(s), _reg2.exec(s));
		console.log(_reg.sticky, _reg2.sticky); // 判断是否开启y匹配的模式
	}

	{
		console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A')); // 把4个字节当作2个字符
		console.log('u-1', /^(?:\uD83D(?![\uDC00-\uDFFF]))/.test('\uD83D\uDC2A')); // 把4个字节当作一个字符
		console.log(/\u{61}/.test('a'));
		console.log(/a/.test('a'));

		console.log('\uD842\uDFB7');
		var _s = '𠮷';
		console.log('u:', /^.$/.test(_s));
		console.log('u:', /^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test(_s)); //.不一定可以匹配任意字符，必须是小于2个字节的字符才可以

		console.log('test:', /𠮷{2}/.test('𠮷𠮷'));
		console.log('test:', /(?:\uD842\uDFB7){2}/.test('𠮷𠮷'));
	}

/***/ })
/******/ ]);