/*
* @Author: qinhx
* @Date:   2018-11-17 13:35:48
* @Last Modified by:   qinhx
* @Last Modified time: 2018-11-17 13:45:22
*/
const path = require('path')
module.exports = {
	entry:'./main.js',
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'./dist')
	},
	module:{
		rules:[{
			test:/\.css$/,
			use:['style-loader','css-loader?minimize']
		}]
	}
}