/*
number string array enum(枚举) any num underfined void  never  
ts 必须指定类型
*/
var flag:boolean = true;
var num:Number = 123;
var str:String = 'this is ts'

//定义数组的方式
// 1->
var arr:number[] = [11,22,33]
console.log(arr)
// 2->
var arr2:Array<number> = [11,22,33,44]


// 元组类型（tuple）  属于数组的一种
let arr3:[number, string] = [12,'str']

// 枚举类型

enum Flag {success=1, error=2};
let s:Flag = Flag.success
console.log(s) // 如果定义的枚举没有标识符，那就打印下标

enum Err {'underfined'=-1,'null'=-2,'success'=1}
var e:Err = Err.null
console.log(e)

// any 任意类型
var box:any = document.querySelectorAll('box');
box.style.background = '#ccc'

//underfined  null  其他类型（nerver类型）的子类型