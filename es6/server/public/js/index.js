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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// 类
	{
		//基本定义和生成实例
		var Parent = function Parent() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'aaa';

			_classCallCheck(this, Parent);

			this.name = name;
		};

		var v_parent = new Parent('v');
		console.log(v_parent);
	}
	{
		//继承
		var _Parent = function _Parent() {
			var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'aaa';

			_classCallCheck(this, _Parent);

			this.name = name;
		};

		var Child = function (_Parent2) {
			_inherits(Child, _Parent2);

			function Child() {
				var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'child';

				_classCallCheck(this, Child);

				//继承父类必须在第一行
				var _this = _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).call(this, name));

				_this.type = 'child';
				return _this;
			}

			return Child;
		}(_Parent);

		console.log(new Child());
	}
	{
		var _Parent3 = function () {
			function _Parent3() {
				var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'aaa';

				_classCallCheck(this, _Parent3);

				this.name = name;
			}

			_createClass(_Parent3, [{
				key: 'longName',
				get: function get() {
					return 'long' + this.name;
				},
				set: function set(value) {
					this.name = value;
				}
			}]);

			return _Parent3;
		}();

		var v = new _Parent3();
		console.log('get', v.longName);
		v.longName = 'hello';
		console.log('set', v.longName);
	}
	{
		//静态方法
		var _Parent4 = function () {
			function _Parent4() {
				var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'aaa';

				_classCallCheck(this, _Parent4);

				this.name = name;
			}

			_createClass(_Parent4, null, [{
				key: 'tell',
				value: function tell() {
					// 加static,静态方法
					console.log('tell');
				}
			}]);

			return _Parent4;
		}();

		_Parent4.tell(); // 静态方法用类去掉用，而不是用的实例
	}
	{
		//静态属性
		var _Parent5 = function () {
			function _Parent5() {
				var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'aaa';

				_classCallCheck(this, _Parent5);

				this.name = name;
			}

			_createClass(_Parent5, null, [{
				key: 'tell',
				value: function tell() {
					console.log('tell');
				}
			}]);

			return _Parent5;
		}();

		_Parent5.type = 'test';
		console.log('静态属性为：', _Parent5.type);
	}

/***/ })
/******/ ]);