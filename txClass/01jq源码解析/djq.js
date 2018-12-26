(function(global, factory){
	if ( typeof module === "object" && typeof module.exports === "object" ) {
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
		} else {
			factory(global)
		}
})(this || window, function(window, noGlobal) {
	var version = "1.0.1",
	jQuery = function(selector, context) {
		return new jQuery.fn.init(selector, context);
	};

	jQuery.fn = jQuery.prototype = {
		init:  function(selector, context) {
			return jQuery.makeArray(selector, context || document);
		},
		each: function(fun){
			for(var i = 0; i< fun.length; i++) {
				fun.call(this, i, this[i])
			}
			return this;
		},
		addClass: function (className) {
			return this.each(function(index, ele){
				console.log(ele.className)
				ele.className += ' ' + className;
				console.log(ele.className)
				
			})
		},
		removeClass: function(className){
			return this.each(function(index, ele){
				ele.className = '';
			})
		}
	}


	jQuery.makeArray = function(selector, context){
		var $eles = new Sizzle(selector, context);
		$eles.context = context;
		$eles.__proto__ = jQuery.fn;
		$eles.prevObject = arguments.callee;
		return $eles;

	}


	if (!noGlobal) {
		window.jQuery = window.$ = jQuery
	}
})