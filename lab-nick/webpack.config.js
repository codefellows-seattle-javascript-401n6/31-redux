'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  mode: 'development', // production
  devtool: 'eval-source-map',
  entry: './src/main.jsx', // name of java script file
  output: {
    path: path.resolve(__dirname, './dist'), // puts dist in current working directory
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.s?css$/, loader: [
        'style-loader', 'css-loader', 'sass-loader'  // The order of these matters!
      ]}
    ]
  }
};

module.exports = config;
