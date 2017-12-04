// 创建层级目录

// 创建文件 定义模块成员  导出模块成员 载入模块 使用模块
const fs = require('fs');
const path = require('path');
function mkdirs (pathname, callback) {
	// 判断传入的是否是一个绝对路径
	pathname = path.isAbsolute(pathname) ? pathname : path.join(__dirname, pathname);

	// 获取要创建的部分
	// pathname = pathname.replace(__dirname, '');
	relativepath = path.relative(__dirname, pathname);
	var folders = relativepath.split(path.sep)
	folders.forEach(folder => {
		
	})
	console.log(relativepath);

};
module.exports = mkdirs;