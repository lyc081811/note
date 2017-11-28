// 文件自动转换
const fs = require('fs');
const path = require('path');

// 接收需要转换的文件路径
const target = path.join(__dirname, process.argv[2]);

// 监视文件变化
fs.watchFile(target, (curr, prev) => {
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
		// 17:00
	});
}); 
