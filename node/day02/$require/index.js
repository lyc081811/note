// require()函数
'use strict';
function $require(id) {
	// 先找到一个文件,读取文件内容 js代码
	const fs = require('fs');
	const paht = require('path');

	const filename = path.join(__dirname, id);// 要加载的js完整路径
	const dirname = path.dirname(filename);

	let code = fs.readFileSync(dirname + id,'utf8');
	// 执行代码,要执行的代码 ,营造一个私有空间
	let module = {
		id: filename,
		export: {}
	};
	let exports = module.exports;
	code = `(function($require,module,exports,__dirname,__filename){
		${code}
	})($require,module,exports,,filename)`;
	eval(code);
	// 返回值
	return module.exports;
}
var m4 = $require('./module/module02.js');
m4.say('hello'); 
