const path = require('path');

const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:     path.resolve(__dirname, '../simpleNotification/src/index.js'),
	resolve:   {
		extensions: ['.js', '.ts', '.tsx', '.json'],
	},
	devServer: {
		contentBase: path.resolve(__dirname, '../simpleNotification/build'),
		hot:         true,
		host:        'localhost',
		port:        8080,
	},
	module:    {
		rules: [
			{
				test:    /\.ts?$/,
				use:     'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss?$/i,
				use:  ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.css$/i,
				use:  ['style-loader', 'css-loader'],
			}
		]
	},
	plugins:   [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../simpleNotification/index.html'),
			inject:   true,
		})
	]

};
