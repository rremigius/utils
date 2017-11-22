const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env) {

	return {
		entry: {
			test: './tests/index.js'
		},

		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'utils.[name].js'
		},

		module: {
			rules: [
				{
					test: /\.(ng)html$/,
					use: 'raw-loader'
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},
				{
					test: /\.scss$/,
					loaders: ['style', 'css', 'sass']
				},
				{
					test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
					loader: 'url-loader',
					options: {
						limit: 10000
					}
				}
			]
		},

		plugins: [
			new HtmlWebpackPlugin({
				template: './tests/index.html',
				filename: 'index.html',
				inject: 'body'
			})
		],

		devtool: 'cheap-source-map'
	}
};
