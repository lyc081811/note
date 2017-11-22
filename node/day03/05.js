// 移动文件  重命名

const fs = require('fs');
const path = require('path');

var curPath = path.join(__dirname, '/temp.txt');
var tarPath = path.join(__dirname, '../temp.txt');
fs.rename(curPath, tarPath);