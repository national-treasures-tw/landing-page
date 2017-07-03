var path = require('path');
var webpack = require("webpack");

module.exports = {
	entry: [
		path.resolve(__dirname, 'app/main.js')
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/, exclude: /node_modules/, loader: 'babel'
			},
			{
				test: /\.css$/, loader: 'style!css?modules'
			},
			{
				test: /\.jpe?g$|\.gif$|\.pdf$|\.docx|\.ttf|\.png$|\.svg$/i,
        loader: 'url-loader',
        query: { limit: 20000 }
			}
		]
	}
}
