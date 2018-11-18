# 			webpack 

webpack learning in my ordinary day

1. npm init

2. 安装webpack 到本项目 

   1. npm i -D 等同于 npm install --save-dev 安装模块并保存到package.json 中

   2. npm i -g 安装到全局

      + html
      + js文件
      + 执行入口的js文件
      + webpack.config.js 默认从该文件读取配置

      项目目录：

      |--index.html

      |--show.js(操作dom元素)

      |--main.js(执行入口文件)

      |--webpack.config.js(配置文件)

   3. webpack.config.js中的配置详解

   + const path = require('path')  获取绝对路径

   + module.exports = {
      entry:'./main.js' ---------模块的输入文件

     output:{

        filename:'output.js' ---------输出文件的名称

        path:path.resolve(__dirname,'./dist')---------output.js的输出位置 

       module:{

        rules:[{

     ​     test:'/ \ .css$/'--------匹配.css结尾的文件

     ​     use:['style-loader','css-loader?minimize']-----从后开始加载转换 'css-loader?minimize' 是

     url querystring  

     }]

     }

     }

     } 模块输出

   + 使用plugin 

     + 使用到的第一plugin extact-text-webpack-plugin 
       **作用：提取转换整合css文件** 

   **核心概念** 

   + entry
   + module
   + chunk
   + loader
   + plugin
   + output                                                                                                                                                                                                                                                                                                                                                      

**babel** 将ES6转化为ES6而不必担心兼容问题

**编译过程** 从根目录下de.babelrc 中读取配置 是一个json 文件

babel-plugin-transform-runtime 是将ES6转化为ES5构建一个辅助函数,当有多个相同的class 时就会重复注入，所以在使用babel-plugin-transform-runtime 时，要配套使用babel-runtime ，babel-runtime 的作用是将辅助函数替换成一条导入语句 var _extent = require('babel-runtime/helpers/_extent');减少重注入，减小了代码文件大小。



