{
	let arr = Array.of(3,4,7,9);// of把一组数据变量转数组,若不传则是空数组
	console.log(arr);
}
{
	let p = document.querySelectorAll('p');
	let pArr = Array.from(p, x=>{console.log(x.textContent)});
	// console.log(p)
	// pArr.forEach(x => {
	// 	console.log(x.textContent);
	// })
}
{
	console.log('fill', [1,1,1].fill(7,1,2))// 左闭右开
}
{
	for (let i of [1,2,3].keys()) {
		console.log(i)
	}
	for (let i of [3,2,1].values()) { //必须兼容 polyfill
		console.log(i)
	}
	for (let [i, value] of [1,2,3].entries()) {
		console.log(i,value)
	}

}
{
	console.log([1,2,3,4,5].copyWithin(0,3,4))
}
//object的移步 http://es6.ruanyifeng.com/#docs/object