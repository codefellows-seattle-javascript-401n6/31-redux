const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: `${__dirname}/src/main.js`,
  plugins: [new HtmlPlugin({template: __dirname + '/src/index.html'})],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        loader: ['style-loader', 'css-loader' ,'sass-loader'],
      },
    ]
  }
}