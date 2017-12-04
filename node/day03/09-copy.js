const fs = require('fs');
const path = require('path');

var curpath = 'E:\\node\\NodeJS第1天.7z';
var prepath = 'E:\\NodeJS第1天.7z';
fs.rename(curpath, prepath);