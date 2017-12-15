/**
 * Created by fengjj on 2017/9/23.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const entries = require("./entry.js")
/*module.exports = {
    entry:entries,
    devtool:'eval-source-map',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:"[name].[hash].js",
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:'/node_modules/'
            },
            {
                test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            // 限制 图片大小 10000B，小于限制会将图片转换为 base64格式
                            limit: 100,
                            // 超出限制，创建的文件格式
                            // build/images/[图片名].[hash].[图片格式]
                            name: 'images/[name].[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test:/\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:[{
                        loader:"css-loader",
                        options:{modules:true}
                    }
                    ]
                })
            }
        ]
    },
    devServer: {
        inline:true,
        port:8800
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template:__dirname+'/app/index.html'
        }),
        new ExtractTextPlugin("css/style.css")

    ]
}*/
module.exports = function(env){
    console.log(env);
    return {
    entry:entries,
    devtool:'eval-source-map',
    output:{
        path:path.resolve(__dirname,'build'),
        filename:"[name].[hash].js",
        publicPath:"build/"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:'/node_modules/'
            },
            {
                test:/\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            // 限制 图片大小 10000B，小于限制会将图片转换为 base64格式
                            limit: 100,
                            // 超出限制，创建的文件格式
                            // build/images/[图片名].[hash].[图片格式]
                            name: 'images/[name].[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test:/\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:[{
                        loader:"css-loader",
                        options:{modules:true}
                    }
                    ]
                })
            },
            {
                test:/\.styl$/,
                use:'stylus-loader'
            }
        ]
    },
    devServer: {
        inline:true,
        port:8800
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template:__dirname+'/app/index.html'
        }),
        new ExtractTextPlugin("css/style.css")

    ]
}
}
