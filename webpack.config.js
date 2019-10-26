const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
entry:'./src/index.js',
output:{
    filename:'app.js',
    path:path.resolve(__dirname,'dist')
},
devServer:{port:4000},
resolve:{
  extensions:['.js','.jsx']
},
module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/,
        loader: "babel-loader" 
      }
    ]
  },
  plugins:[new HtmlWebpackPlugin({
      template:'./src/index.html'
  })]
};