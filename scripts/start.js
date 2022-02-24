const webpackConfig = require('../config/webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

const Start = {
    ...webpackConfig,
    stats: 'errors-only',
    devServer: {
        open: false,
        hot: true,
        port: 3000
    },
    watch: true,
    watchOptions: {
        poll: true,
        ignored: /node_modules/,
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'public/index.html',
        }),
        new ProgressBarPlugin({
            format: 'build [:bar] :percent (:elapsed seconds)',
            clear: false,
            width: 30
        }),
    ],
}


module.exports = Start;