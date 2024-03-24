const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require("node:path");

const rootDir = path.resolve('./');
console.log('testes', path.resolve(__dirname, rootDir + "/core/app/init.ts"))


module.exports = {
	entry: path.resolve(__dirname, rootDir + "/core/app/init.ts"),
	output: {
		path: path.resolve(__dirname, rootDir + "/dist/app"),
		filename: 'init.js'
	},
	target: 'electron-main',
	module: {
		rules: [{
			test: /\.ts$/,
			include: /core\/app\/.*$/,
			use: [{ loader: 'ts-loader' }]
		}]
	}
}