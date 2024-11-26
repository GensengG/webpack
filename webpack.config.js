const path = require('node:path'); 
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                {
                  loader: "babel-loader"
                },
            ]
            },
            {
            test: /\.html$/,
            use: [
                {
                loader: "html-loader", 
                },
            ],
            },
            {
            test: /\.css$/, 
            use: [
                MiniCSSExtractPlugin.loader,
                "css-loader",
                "style-loader"
            ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCSSExtractPlugin()
    ]
}