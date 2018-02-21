const path = require('path');
module.exports = {
	entry: {
		entry: './src/entery.js',
		entry2: './src/entery2.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		host: 'localhost',
		compress: true,
		port: 1101
	}
}