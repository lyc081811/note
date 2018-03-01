{
	function test(x,y = 'heool') { // 默认值在最后！1
		console.log(x,y)
	}
	test(1,2);
}
{
	let x = 'test';
	function test2(c,y = x){
		console.log(c,y);
	}
	test2('kill')
}
{
	function test3(...arg) {
		for(let v of arg) {
			console.log('rest', v);
		}
	}
	test3(1,2,3, 'a')
}
{
	//函数的尾调用： http://www.ruanyifeng.com/blog/2015/04/tail-call.html
}
