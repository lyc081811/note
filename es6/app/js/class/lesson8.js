// 类
{
	//基本定义和生成实例
	class Parent {
		constructor(name='aaa'){
			this.name = name;
		}
	}
	let v_parent = new Parent('v');
	console.log(v_parent)
}
{
	//继承
	class Parent {
		constructor(name='aaa'){
			this.name = name;
		}
	}
	class Child extends Parent{
		constructor(name='child'){
			super(name);//继承父类必须在第一行
			this.type = 'child';
		}
	}
	console.log(new Child())
}
{
	class Parent {
		constructor(name='aaa'){
			this.name = name;
		}
		get longName() {
			return 'long'+this.name;
		}
		set longName(value) {
			this.name = value;
		}
	}
	let v = new Parent();
	console.log('get',v.longName)
	v.longName = 'hello';
	console.log('set',v.longName)
}
{
	//静态方法
	class Parent {
		constructor(name='aaa'){
			this.name = name;
		}
		static tell() { // 加static,静态方法
			console.log('tell')
		}
	}
	Parent.tell();// 静态方法用类去调用，而不是用的实例
}
{
	//静态属性
	class Parent {
		constructor(name='aaa'){
			this.name = name;
		}
		static tell() {
			console.log('tell')
		}

	}
	Parent.type = 'test';
	console.log('静态属性为：', Parent.type )
}