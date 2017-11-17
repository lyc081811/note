// console.log(__dirname);
// console.log(__filename);

 const fs = require('fs');
// 所有的文件操作必须是物理路径
 fs.readFile(__dirname + '/../list.md','utf8' , (error, data) => {
 	if(error) {
 		throw error;
 	}
 	console.log(data);
 });