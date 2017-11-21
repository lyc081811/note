const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

fs.readFile(path.join(__dirname, '血染的风采.lrc'),(error,data) => {
	var lines = iconv.decode(data,'gbk').split('\n');
	// console.log(lines.length);
	lines.forEach(line => {
		var reg = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s(.+)/;
	})
});

