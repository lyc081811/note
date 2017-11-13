// var argv = process.argv;//这样前2位是没啥用的
// console.log(argv);
var argvs = process.argv.slice(2);
switch (argvs[0]) {
	case 'init':
		console.log('you will input "init"');
		break;
	case 'install':
		console.log('you will input "install"');
		break;
	case 'uninstall':
		console.log('you will input "uninstall"');
		break;
}
console.log(argvs.toString());