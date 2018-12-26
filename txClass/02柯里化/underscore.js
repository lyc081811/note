(function(){
    var _ = {};
    _.restArgs = function(fn) {
        return function(){ // 支持柯里化
            var startLen = fn.length,
                startIndex = startLen - 1,
                args = Aray(startLen); 
            var res = Array.prototype.slice.cal(arguments, startIndex);
        }
    }
    root._ = _;
})(this)
