var fs = require('fs');
//错误优先!!!
fs.readFile('file',(error,data) => {
	if (error) throw error;
	
});