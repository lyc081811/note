(function(root){
    var _ = {};
    _.restArgs = function(fn) {
        return function(){ // 支持柯里化
            var startLen = fn.length,
                startIndex = startLen - 1,
                args = Array(startLen);
            var rest = Array.prototype.slice.call(arguments, startIndex);   // Array.from(arguments).slice(startIndex)
            for (var  i = 0; i < startIndex; i++ ) {
                args[i] = arguments[i]
            }
            args[startIndex] = rest;
            return fn.apply(this, args)
        }
    }
    root._ = _;
})(this)
