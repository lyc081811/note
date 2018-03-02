// Proxy, Reflect
{
	let obj = {
		name: 'net',
		_r: 123,
		time: '11:00'
	}
	let monitor = new Proxy(obj,{
		// 拦截对象属性的读取
		get(target,key) {
			return target[key].replace('11', '14')
		},
		// 拦截对象属性的设置
		set(target,key,value) {
			if(key === 'name') {
				return target[key] = value;
			}else{
				return target[key];
			}
		},
		//拦截key in object操作
		has(target,key) {
			if(key === 'name') {
				return target[key];
			}else{
				return false;
			}
		},
		deleteProperty(target,key) {
			if(key.indexOf('_') > -1) {
				delete target[key];
				return true;
			}else {
				return target[key];
			}
		},
		// 拦截keys,getOwnPropertySymbol--方法
		ownKeys(target) {
			return Object.keys(target).filter(x=>{return x != 'name';})
		}
	})
	/*
		console.log(monitor.time);
		monitor.time = '2018';
		console.log(monitor.time);
		monitor.name = '2018';
		console.log(monitor.name);
		console.log('has->','name' in monitor, 'time' in monitor);

		delete monitor.time;
		console.log(monitor);
	*/
	console.log(Object.keys(monitor));
}
{
 	let obj = {
		name: 'net',
		_r: 123,
		time: '11:00'
	}
	console.log(Reflect.get(obj,'time'))
}