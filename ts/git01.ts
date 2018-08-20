// 定义boolean、数字、字符串
let isDone: boolean = false;
let a1: number = 6;
let a2: number = 0xf00d;
let a3: number = 0b101010;
// 定义数组的2种方式
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,4];

// 元组[tuple] 许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
let x: [string, number] = ['111', 111];

// 当访问一个未知的元素，会使用联合类型（高级主题）替代
x[2] = 'false';


// 枚举 enum(不懂)
enum Color  {Red, Green, Blue}
let c: Color = Color.Red

// 任意值
let aaa: any = 4;
let arr: any[] = [2,'2', true]
aaa = '4'

// 此外，还有Null, Underfined, Never(些永不存在的值的类型)

function error(msg: string): never {
    throw new Error(msg)
}

