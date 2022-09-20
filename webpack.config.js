'use strict';
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
      './resources/vue/main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'public/assets/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  resolve: {
    extensions: ['.vue', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './resources/templates/index.html',
      // filename: '../public/index.html',
      inject: true
    }),
    new VueLoaderPlugin(),
  ]
}