var fs = require('fs');

//这是动画的帧数
var fps = 10;
//数组的每一个成员就是一帧
var arr = [];
for(var i = 1;i < 7;i++) {
	arr[arr.length] = fs.readFileSync(`./img/${i}.txt`, 'utf8');
}
//当前显示的哪一帧
var cur = 0;
var render = ()=> {
	//将当前控制台清空,输出新内容

		/*
		获取控制台的长宽
		var size = process.stdout.getWindowSize();
		for(var i = 0;i < size[1];i++) {
			process.stdout.write('\r\n');
		}
		//这样写控制台会闪烁
		*/
	//这2行代码会清空当前的内容
	process.stdout.write('\033[2J');
  	process.stdout.write('\033[0f');

	if(cur == arr.length) {
		cur = 0;
	}
	process.stdout.write(arr[cur++]);
};
    setInterval(render, 1000 / fps);

