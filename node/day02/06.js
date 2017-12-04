// 模块内部的私有空间

//每个模块都是一个私有空间
var module = require('./module/module02.js');
console.log(a);

console.log(module);
//模块本身就是一个封闭的自执行函数

/*  require()模块
	只加载一次,是有缓存的;
	require.cache() ->显示所有加载的模块 //加载时可以清清除 所有的缓存
*/