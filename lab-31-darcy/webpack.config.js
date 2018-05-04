import HtmlPlugin from 'html-webpack-plugin';

export const mode = 'development';
export const entry = `${__dirname}/src/main.js`;
export const plugins = [new HtmlPlugin()];
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/,
      loader: ['style-loader', 'css-loader', 'sass-loader'],
    },
  ]
};