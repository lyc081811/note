const fs = require('fs');
const path = require('path');

// 移动
/*
	var curpath = 'E:\\node\\NodeJS第1天.7z';
	var prepath = 'E:\\NodeJS第1天.7z';
	fs.rename(curpath, prepath);
	*/

// copy01
/*
	console.time('a');
	fs.readFile('G:\\1.mp4', function(err, data) {
		if (err) throw err;
		fs.writeFile('F:\\2.mp4', data, err => {
			if (err) throw err;
			console.log('完成');
		});
	});
	console.timeEnd('a');
	*/
//大文件copy内存受不住,也没有进度

// copy02
// 文件的读取流并来没有读出正式的数据
var reader = fs.createReadStream('F:\\apache.zip');
var writer = fs.createWriteStream('G:\\apache.zip');
/*
fs.stat('F:\\apache.zip', (err, stats) => {
	if (stats) {
		var readTotal = 0;
		reader.on('data', chunk => {
		// chunk是一个buffer (字节数组)
		writer.write(chunk, err => {
			console.log('进度', (readTotal += chunk.length) / stats.size * 100 + '%');
		});
	});
	}
});*/

write.on('pipe', src => {
	console.log( src === reader); // true
});
// pipe()的方法
reader // 读取流
	.pipe(write)
	.pipe();
