var fs = require('fs');
//错误优先!!!
fs.readFile('file',(error,data) => {
	if (error) throw error;
	
});
// 进程和线程
// 进程就是进行中的程序(qq,360---)
// (node)进程启动之后会创建一个线程,线程用于执行我们的代码
/*
	在电脑多核时代,其实都是单线程,多线程都是假的
*/


//非阻塞I/O

