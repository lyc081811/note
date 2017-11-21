// path模块
const path = require('path');

const temp = path.join(__dirname, '1.txt');

console.log(temp);

// path.basename(path, ext[去掉扩展名,可选])
console.log(path.basename(temp, '.txt'));

// path.delimiter属性, 获取不同操作系统中默认的路径分隔符
console.log(path.delimiter); // ;
// eg:查看系统的环境变量
console.log(process.env.PATH.split(path.delimiter));

console.log(path.dirname(temp));
console.log(path.extname(temp).slice(1));

// path.parse() 讲一个路径字符串转为一个对象
console.log(path.parse(temp));
console.log(path.format(path.parse(temp))); // 拼接成字符串

// path.isAbsolute() -> 判断一个路径是否是绝对路径
console.log(path.isAbsolute(temp));
console.log(path.isAbsolute('../1/1.txt'));

// path.normalize(path) //规范化路径
console.log(path.normalize('c:/lyc//1\\2/2.txt'));

//path.relative(from, to)

// path.resolve()方法会把一个路径或路径片段的序列解析为一个绝对路径
console.log(path.resolve('day03'));

