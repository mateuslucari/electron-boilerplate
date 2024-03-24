const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        host: "0.0.0.0",
        port: "40992",
        hot: true,
        client: {
            progress: true,
        }
    }
});