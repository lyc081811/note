const fs = require('fs');
fs.readFile('./1.txt', 'utf8', (err, data) => {
	if (err) {
		throw err;
	} else {
		console.log(data);
	}
});