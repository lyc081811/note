// 实现命令行计算器
'use strict';
//1.接收参数  2.分析参数   3.进行参数
const args = process.argv.slice(2); // process.argv->[node执行程序所在路径, 当前脚本的路径, --]

if (args.length !== 3) {
  console.log('参数不合法');
  throw new Error('参数不合法');
  // return false;
} 
let p0 = args[0];
let op = args[1];
let p1= args[2];

// let result = eval(`${p0} ${op} ${p1}`);
const calc = require('./module/module.js');
let result;
switch (op) {
  case '+':
    result = calc.add(parseFloat(p0), parseFloat(p1));
    break;
  case '-':
    result = calc.subtract(parseFloat(p0), parseFloat(p1));
    break;
  case '*':
    result = calc.mutiply(parseFloat(p0), parseFloat(p1));
    break;
  default:
    throw new Error('不被支持的操作符' + op);
}
console.log(result);