const  path = require('path');
const {  AutoWebPlugin } = require('web-webpack-plugin');
const  ExtractTextPlugin = require('extract-text-webpack-plugin');
const aotuWebPlugin = new AutoWebPlugin('pages', {
    template: './template.html', // HTML 模版文件所在的文件路径
    postEntrys: ['./main.css'],// 所有页面都依赖这份通用的 CSS 样式文件
    // 提取出所有页面公共的代码
    commonsChunk: {
        name: 'common',// 提取出公共代码 Chunk 的名称
    },
});
module.exports={
    entry:aotuWebPlugin.entry({
        "index":'./main.js',
        "login":'./login.js's
    }),
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
        aotuWebPlugin,
        new ExtractTextPlugin({
            filename:'[name].css'
        })
    ]
};