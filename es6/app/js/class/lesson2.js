// 正则扩展

{
	// es5
	let reg = new RegExp('xyz', 'i');
	let reg2 = new RegExp(/xyz/i);
	console.log(reg.test('xyz123'), reg2.test('xyz123'));

	// es6
	let reg3 = new RegExp(/xyz/ig, 'i');
	console.log(reg3.flags); // .flags获取修饰符的属性
}

{
	let s = 'bbb_bb-b';
	let reg = /b+/g;
	let reg2 = /b+/y;
	console.log('one', reg.exec(s),reg2.exec(s));
	console.log('two', reg.exec(s),reg2.exec(s));
	console.log(reg.sticky, reg2.sticky); // 判断是否开启y匹配的模式
}

{
	console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A')); // 把4个字节当作2个字符
	console.log('u-1',/^\uD83D/u.test('\uD83D\uDC2A')); // 把4个字节当作一个字符
	console.log(/\u{61}/.test('a'))
	console.log(/\u{61}/u.test('a'))

	console.log(`\u{20BB7}`)
	let s = '𠮷';
	console.log('u:',/^.$/.test(s))
	console.log('u:',/^.$/u.test(s)) //.不一定可以匹配任意字符，必须是小于2个字节的字符才可以

	console.log('test:', /𠮷{2}/.test('𠮷𠮷'))
	console.log('test:', /𠮷{2}/u.test('𠮷𠮷'))
}