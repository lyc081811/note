"use strict";
/*
number string array enum(枚举) any num underfined void  never
ts 必须指定类型
*/
var flag = true;
var num = 123;
var str = 'this is ts';
//定义数组的方式
// 1->
var arr = [11, 22, 33];
console.log(arr);
// 2->
var arr2 = [11, 22, 33, 44];
// 元组类型（tuple）  属于数组的一种
var arr3 = [12, 'str'];
// 枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
;
var s = Flag.success;
console.log(s); // 如果定义的枚举没有标识符，那就打印下标
var Err;
(function (Err) {
    Err[Err["underfined"] = -1] = "underfined";
    Err[Err["null"] = -2] = "null";
    Err[Err["success"] = 1] = "success";
})(Err || (Err = {}));
var e = Err.null;
console.log(e);
// any 任意类型
var box = document.querySelectorAll('box');
box.style.background = '#ccc';
//underfined  null  其他类型（nerver类型）的子类型
