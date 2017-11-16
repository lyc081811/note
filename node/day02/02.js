// node如何充分利用单线程
const fs = require('fs');

//先判断是否存在list文件
fs.stat('./list.md',  (err, stats) => {
	// console.log(stats);
	if (err) {
		fs.writeFile('./list.md', new Date(), (err) => {
			if(err) {
				console.log(err);
			}
			console.log('文件删除后创建成功');
		})

	} else {
		fs.unlink('./list.md', (err) => {
			if(err) {
				console.log(err);	
			}
			fs.writeFile('./list.md', '12345', (err) => {
				if(err) {
					console.log(err);
				}
				console.log('文件删除后创建成功');
			})
		});
	}

});
// node      
// node中将所有的阻塞操作交给了内部实现的线程池;
// node本身主线程主要就是不断的往返调度
