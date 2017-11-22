// [异步文件写入]fs.writeFile(file,data[,option],callback(err))
// [流文件写入]fs.cretWriteStream(path[,option]);
// 默认会覆盖
const fs = require('fs');
const path = require('path');

// fs.writeFile()
	// JSON.stringify() 序列化
	// JSON.parse() 反序列化
/*fs.writeFile(path.join(__dirname, '2.txt'), JSON.stringify({id: 10}),(err)=>{
	if(err) {
		//读文件是不存在报错
		// 意外错误
		// 文件权限问题
		// 文件夹找不到(不会自己创建文件夹)
		console.log(err);
	} else {
		console.log('sucess');
	}
});*/

// fs.writeFilesync()


// fs.createWriteStream()
var streamWriter = fs.createWriteStream(path.join(__dirname + '/temp.txt'));
setInterval(()=>{
	streamWriter.write('hello', () => {
		console.log('+1');
	})
},2000)
