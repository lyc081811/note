// node开发服务器的阻塞情况
'use strict';// v8 对es6的支持情况:不支持, 直接支持, 严格模式下支持

const http = require('http');
let count = 0;
const server = http.createServer((req,res) => {
	// 此回调在有任何用户请求时触发
	res.write(`这是第${count++}个访问用户`);
	// if (count ==10) {
	// 	while(true);
	// }
	res.end();
});
server.listen(2080, (error) => {
	if(error) {
		throw error;
	}
	console.log('成功启动2080端口');
});