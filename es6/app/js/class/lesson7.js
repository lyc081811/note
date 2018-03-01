//Symbol  提供一个独一无二的值
{
	let a = Symbol();
	let a2 = Symbol();
	console.log(a === a2);
	let a3 = Symbol.for('a3');
	let a4 = Symbol.for('a3');
	console.log(a3 === a4);
}
{
	let a1 = Symbol.for('abc');
	let obj = {
		[a1]: 'abc',
		'abc': 234,
		'c': 456
	}
	console.log(a1,obj)；

	for(let [key, value] of Object.entries(obj)) {
		console.log(key, value);
	}// 这样是取不到的
	
}