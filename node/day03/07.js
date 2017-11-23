//  递归打印树状结构

const fs = require('fs');
const path = require('path');
require('./proto.js');

// 获取当前有没有传入路径
var target = path.join(__dirname, process.argv[2] || './');
fs.readdir(target, (err, files) => {
	files.forEach(file => {
		// console.log(target, file);
		fs.stat(target, (err, states) => {
			console.log(`${states.mtime.format('yy/MM/dd HH:mm')}\t${states.size}\t${file}`);
		});
	})
});







