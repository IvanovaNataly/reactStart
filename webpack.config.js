var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [
        {   test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader" 
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ["css-loader"]
            })
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: ["css-loader", "sass-loader"]
            })
        },
        {
            test: /\.jpg$/,
            use: {
                loader: "file-loader",
                query: {
                    name: "[cat]+[hash].[ext]"
                }
            }
        }
        ]
    },

    devtool: "source-map",

    plugins: [
        new HtmlWebpackPlugin({
                template: "index.html"
            }),
        new ExtractTextPlugin("styles.css")
    ]

};
