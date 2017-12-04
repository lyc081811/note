// 创建文件夹
const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'demo01'));

// fs.mkdir(path.join(__dirname, '2/demo2'),(err) => {
// 	console.log(err);
// });

const mkdirs = require('./mkdeirs');
mkdirs('demo/demo02')
mkdirs(path.join(__dirname, 'demo/demo2'));