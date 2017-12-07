// 文件自动转换
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const browserSync = require("browser-sync");

// 接收需要转换的文件路径
const target = path.join(__dirname, process.argv[2]);

var filename = target.replace(path.extname(target), '.html');
var indexpath = path.basename(filename);
// 通过browersync创建一个文件服务器
browserSync({
	server: path.dirname(target),
	index: indexpath,
	notify: false
});

var tpl = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
		{{data}}
	</body>
	</html>
`;
// 监视文件变化
fs.watchFile(target, {interval: 200}, (curr, prev) => {
	//console.log(`current: ${curr.size};prevous: ${prev.size}`);
	//console.log(curr)

	// 判断文件有没有变化
	if (curr.mtime == prev.mtime) {
		return false;
	}
	fs.readFile(target, 'utf8', (err, data) => {
		if(err) {
		 	throw err;
		}
		var html = marked(data);
		html = tpl.replace('{{data}}', html);
		fs.writeFile(target.replace(path.extname(target), '.html'), html, 'utf8');
		browserSync.reload(path.basename(filename));
	});
}); 


