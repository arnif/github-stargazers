'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss']
  },
  module: {
    loaders: [
      { test: /\.jsx$/, 
        loaders: [
        'react-hot',
        'jsx?harmony',
        'babel-loader'
      ], 
      include: path.join(__dirname, 'app'),
      exclude: /node_modules/ },
      { test: /\.js$/, 
        loaders: [
        'react-hot',
        'jsx?harmony',
        'babel-loader'
      ], 
      include: path.join(__dirname, 'app'),
      exclude: /node_modules/ },
      { test: /\.css$/, loaders: [
        'style-loader',
        'css-loader',
        'autoprefixer-loader'
      ], exclude: /node_modules/ },
      { test: /\.scss$/, loader: "style!css!sass" },
    ]
  },
};
