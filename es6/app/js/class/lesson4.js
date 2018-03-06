{
	console.log(0b1101111) // 0b 二进制数开头
	console.log(0o765) // 0b 8进制数开头

}
{
	console.log('15', Number.isFinite(15));// 是否无穷
	console.log('NaN', Number.isFinite(NaN));// 是否无穷
	console.log(Number.isNaN(NaN))
}
{
	console.log(Number.isInteger(25.0)); // 是否是整数 .0也是整数
}
{
	console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER , Math.PI);
	console.log('10', Number.isSafeInteger(10)); // 是否在有效范围内
	console.log(Math.trunc(4.9));// 只取整数部分
	console.log(Math.sign(-5), Math.sign(0), Math.sign(5), Math.sign('10'), Math.sign('a')); // 判断 -1  0 1 
	console.log(Math.cbrt(-1), Math.cbrt(8)) // 立方根
}