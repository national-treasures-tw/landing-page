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
	},
	plugins: [
      // Order the modules and chunks by occurrence.
      // This saves space, because often referenced modules
      // and chunks get smaller ids.
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      // turn on for production builds
      new webpack.DefinePlugin({
			  'process.env': {
			    NODE_ENV: JSON.stringify('production')
			  }
			})
  ]
}
