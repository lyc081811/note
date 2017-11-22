const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');//编码格式的package

fs.readFile(path.join(__dirname, '血染的风采.lrc'),(error,data) => {
	var lines = iconv.decode(data,'gbk').split('\n');
	// console.log(typeof(lines));
	var reg = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s(.+)/;
	var begin = new Date().getTime();
	lines.forEach(line => {
		var match = reg.exec(line); //返回一个数组
		if (match) {
			var m = parseInt(match[1]);
			var s = parseInt(match[2]);
			var f = parseInt(match[3]);
			var lyric = match[4];
			var offset = new Date().getTime() - begin;
			setTimeout(() => {
				console.log(lyric);
			}, m * 60 * 1000 + s * 1000 + f - offset);
		} else {
			console.log(line);
		}

	})
});