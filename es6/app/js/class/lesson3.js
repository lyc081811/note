// 字符串扩展
{
	console.log('a', '\u0061');
	console.log('s', '\u20BB7');

	console.log('s', '\u{20BB7}')

	console.log('-----------------')
}
{
	let s = '𠮷';
	console.log(s.length);
	console.log('1', s.charCodeAt(0));
	console.log('1', s.charCodeAt(1));
	let s1 = '𠮷a';
	console.log(s1.length);
	console.log(s1.codePointAt(0))
	console.log(s1.codePointAt(0).toString(16))
	console.log(s1.codePointAt(1))
	console.log(s1.codePointAt(2))
}

{
	console.log(String.fromCharCode('0x20BB7'));
	console.log(String.fromCodePoint('0x20BB7'));
}
{
	let s = '\u{20bb7}abc';
	for (let i = 0; i <s.length; i++) {
		console.log(s[i])
	}
	for(let code of s) {
		console.log(code)
	}
}


{
	let s = 'string';
	console.log(s.includes('s')); // 包含
	console.log(s.startsWith('s')); //  开始 
	console.log(s.endsWith('s')); // 结束
}
{
	let s = 'abc';
	console.log(s.repeat(2));
}
{
	// 2位,1不够前补0
	console.log('1'.padStart(2,'0')) // 01
	console.log('1'.padEnd(2,'0')) // 10
}

// 标签模版
{
	let user = {
		name: 'list',
		info: 'hello word'
	};
	console.log(abc`i am ${user.name},${user.info}`);
	function abc(s,v1,v2) {
		console.log(s,v1,v2);
		return s+v1+v2
	}
}


{
	console.log(String.raw`Hi\n${1+2}`); // raw转移反斜杠
	console.log(`Hi\n${1+2}`);
}