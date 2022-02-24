const webpackConfig = require('../config/webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

const Build = {
    ...webpackConfig,
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

module.exports = Build;