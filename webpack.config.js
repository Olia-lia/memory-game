const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");



const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;


module.exports = {
  entry: './src/index.js',
  mode: "development",

    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },


    resolve: {
      modules: [path.join(__dirname, 'src'), 'node_modules'],
    },
   
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: './src/index.html',
      }),
      new CopyPlugin({
        patterns: [
        {
        from: path.resolve(__dirname, './public/icons'),
        to: path.resolve(__dirname, './build/icons')
        },
      ]}),
    ],
  }
