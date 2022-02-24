const path = require('path')
const rootPath = process.cwd()

module.exports = {
    entry: path.resolve(rootPath, "src/main.tsx"),
    output: {
        path: path.resolve(rootPath, 'dist'),
        filename: 'js/[name].[contenthash:8].js',
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
        alias: {
            '@': path.resolve(rootPath, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                                exportLocalsConvention: 'camelCase',
                                localIdentName: '[path]-[name]-[local]-[hash:5]',
                            },
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                    }
                ],
            }]
    }
}