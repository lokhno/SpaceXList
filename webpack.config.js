const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
require("babel-polyfill");

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader"),
            },
            {
                test: [/\.css$/, /\.s[ac]ss$/i],
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.png|svg|jpg|gif$/,
                use: ["file-loader"],
            },
        ],
    },
};
