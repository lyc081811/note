"use strict";
// 定义boolean、数字、字符串
var isDone = false;
var a1 = 6;
var a2 = 0xf00d;
var a3 = 42;
// 定义数组的2种方式
var list1 = [1, 2, 3];
var list2 = [1, 2, 4];
// 元组[tuple] 许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
var x = ['111', 111];
// 当访问一个未知的元素，会使用联合类型（高级主题）替代
x[2] = 'false';
// 枚举 enum(不懂)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
// 任意值
var aaa = 4;
var arr = [2, '2', true];
aaa = '4';
// 此外，还有Null, Underfined, Never(些永不存在的值的类型)
function error(msg) {
    throw new Error(msg);
}
