// 建立一个socket服务端
const net = require('net');
// 创建一个服务器
var server =  net.createServer(socketConnect);
// 当有客户端与我链接的时候触发
function socketConnect(socket) {
	console.log('connecting-----');
}

// 监听特定端口

server.listen(2080, err => {
	if (err) {
		console.log('端口占用');
		return false;
	}
	console.log('成功监听2080');
});
