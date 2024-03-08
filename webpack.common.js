const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        main: "./src/public/index.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/views/template.html",
            filename: "views/index.html"
        })
    ]
}