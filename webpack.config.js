/* eslint-disable*/
const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
        ],
    },
    devServer: {
        contentBase: './dist'
    }
};