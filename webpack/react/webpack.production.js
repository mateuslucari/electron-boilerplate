const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: 'production',
	target: 'electron-renderer',
	devtool: false,
	optimization: {
		minimize: true
	}
});