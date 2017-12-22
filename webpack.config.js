module.exports={
	//devtool:'eval-source-map',
	entry:__dirname+"/index.js",
	output:{
		path:__dirname+"/app/js",
		filename:"bundle.js"
	},
	devServer:{
		contentBase:"./",//本地服务器所加载的页面所在的目录
		historyApiFallback:true,//不跳转
		inline:true//实时刷新
	},
	module:{
		loaders:[
//			{test:/\.html$/,loader:'row-loader'},
			{test:/\.css$/,loader:'style-loader!css-loader'},
			//{test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            //{test: /\.(png|jpg|ttf)$/, loader: 'url-loader?limit=8192'},
//          {test: /\.js$/,exclude: /node_modules/,loader: 'babel-loader'}
		]
	}
}
