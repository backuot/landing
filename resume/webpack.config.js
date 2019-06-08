const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const app = path.join(__dirname, '/src');

module.exports = {
  context: app,

  entry:  {
    main: './main.js',
  },

  output: {
    path: __dirname + "/dist",
    publicPath: '/',
    filename: 'main.js'
  },

  resolve: {
    extensions: ['', '.js', '.sass']
  },

  devServer: {
    contentBase: 'dist',
    port: 3000,
    hot: true
  },

  plugins: [
    new ExtractTextPlugin("styles/[name].css"),
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.pug"
    })
  ],

  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(scss|sass)$/, loader: ExtractTextPlugin.extract('css-loader!resolve-url!sass-loader') },
      { test: /\.pug$/, loader: "pug" },
      { test: /\.(png|jpg|svg|ttf|eot|woff|woff2|ico)$/, loader: 'file?name=[path][name].[ext]?[hash]' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
