const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("node:path");

const ElectronReloadPlugin = require('webpack-electron-reload')

module.exports = merge(common, {
	mode: 'development',
	plugins: [
		ElectronReloadPlugin()({
			path: path.join(__dirname, './dist/main.js')
		})
	]
});