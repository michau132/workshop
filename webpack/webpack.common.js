const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$|.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.js$|.jsx$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader', },
          { loader: 'eslint-loader', },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader", },
          { loader: "css-loader", },
          { loader: "sass-loader", },
        ],
      },
    ],
  },
  resolve: {
    extensions: [ '.js', '.jsx', ],
  },
  plugins: [ new HtmlWebpackPlugin({
    title: 'Workshop',
    template: './src/index.html',
  }), ],
};