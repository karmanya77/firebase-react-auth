var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.tsx/,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
    devServer: {
        open: true,
        host: "localhost",
        // https: true,
        port: 9090,
        historyApiFallback: true,
    }
}