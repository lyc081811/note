// 数据结构Map（object, key可以使任意的数据类型） Set(数组，不重复)
/*
{
	let list = new Set();
	list.add(5);
	list.add(7);
	console.log('长度', list.size);
	console.log('has', list.has(5));
	list.delete(5);
	console.log('has', list.has(5));
}
{
	let arr = [1,2,3,4,3];
	let list = new Set(arr);
	console.log('长度', list.size);
	let arr2 = Array.from(list);
	console.log(arr2);
}
{
	let arr = ['a', 'b','c'];
	let list = new Set(arr);
	for (let key of list.values()) {
		console.log('value', key)
	}
	for (let key of list.keys()) {
		console.log('key', key)
	}
	for (let key of list) {
		console.log('key', key)
	}
	for (let [key,value] of list.entries()) {
		console.log('key', key,value)
	}
	list.forEach(x => {
		console.log(x)
	})
}
*/

{
	// 数组结构横向对比-增删改查
	let map = new Map();
	let arr = [];

	map.set('t', 1);
	arr.push({t: 1});
	console.info(map,arr)

	let _map = map.has('t');
	let _arr = arr.find(x=>{return x.t});
	console.log(_map,_arr);

	map.set('t', 2);
	arr.forEach(x=>{x?x.t=2:''});
	console.info(map,arr);

	map.delete('t');
	arr.splice(0,1);
	console.info(map,arr);
}
{
	let set = new Set();
	let arr = [];

	set.add({t:1});
	arr.push({t:1});

	let _set = set.has({t:1});
	let _arr = arr.find(x=>{return x.t});

	set.forEach(x => x.t?x.t = 2 : '');
	arr.forEach(x => {x?x.t = 2 : ''});

	set.forEach(x => x.t?x.t = set.delete(x) : '');
	arr.splice(0,1); 
}
{
	// map,set,object对比
	let item = {t:1};

	let map = new Map();
	let set = new Set();
	let obj = {};

	map.set('t',1);
	set.add(item);
	obj['t'] = 1;
	console.log(map,set,obj);

	console.info({
		_map: map.has('t'),
		_set: set.has(item),
		_obj: 't' in obj
	})

	map.set('t',2);
	item.t =2;
	obj['t'] = 2;

	map.delete('t');
	set.delete(item);
	delete obj['t'];
	console.log(map,set,obj);
}
// 以后优先map,set