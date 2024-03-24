const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require("node:path");

const rootDir = path.resolve('./');


module.exports = {
	entry: path.resolve(__dirname, rootDir + "/core/src/index.tsx"),
	output: {
		path: path.resolve(__dirname, rootDir + "/dist/app/src"),
		filename: "[hash].js"
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				include: [path.resolve(__dirname, rootDir + '/core/src')],
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react",
							"@babel/preset-typescript",
						]
					}
				},
				resolve: {
					extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
				}
			},
			{
				test: /\.(html)$/,
				include: [path.resolve(__dirname, rootDir + "/core/src")],
				use: {
					loader: "html-loader"
				}
			},
			{
				test: /\.css$/i,
				use: [
					"style-loader",
					"css-loader",
					"postcss-loader"
				]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"style-loader",
					"css-loader",
					"postcss-loader"
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, rootDir + "/core/src/index.html"),
			filename: "index.html"
		}),
		new MiniCssExtractPlugin(),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	],
	devServer: {
		host: "0.0.0.0",
		port: "40992",
		hot: true,
		client: {
			progress: true,
		}
	}
}