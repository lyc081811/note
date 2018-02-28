{
	let arr = Array.of(3,4,7,9);// of把一组数据变量转数组,若不传则是空数组
	console.log(arr);
}
{
	let p = document.querySelectorAll('p');
	let pArr = Array.from(p);
	console.log(p)
	pArr.forEach(x => {
		console.log(x.textContent);
	})
}