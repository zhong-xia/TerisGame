const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin }= require('clean-webpack-plugin')
module.exports = {
    entry: "./src/index.ts",//入口文件
    output:{
        path:path.resolve("./dist"),//出口文件，必须是绝对路径
        filename:"script/bundle.js"//打包
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module:{
        rules:[
            { test:/.ts$/,use:{
                loader:"ts-loader",
                options:{
                    transpileOnly:true
                }
            }}
        ]
    },
    resolve:{
        extensions:[".ts",".js"]
    }
}