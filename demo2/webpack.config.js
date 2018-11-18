const  path = require('path');
const { WebPlugin, AutoWebPlugin } = require('web-webpack-plugin');
const  ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports={
    entry:{
        app:'./main.js'
    },
    output: {
        filename: "[name]_[chunkhash:8].js",
        path: path.resolve(__dirname,'./dist')
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                use:['babel-loader'],
                exclude:path.resolve(__dirname,'node_modules')
            },{
                test:/\.css/,
                loader:ExtractTextPlugin.extract({
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins: [
        new WebPlugin({
            template:'./template.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin({
            filename:'[name]_[contenthash:hex:8].css'
        })
    ]
};