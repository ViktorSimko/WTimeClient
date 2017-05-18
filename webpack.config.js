const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'public/built'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/built'
  },
  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:3000/built'
  },
  resolve: {
    modules: ["app", "app/api", "app/components", ".", "node_modules"],
    alias: {
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                  path.resolve(__dirname, './node_modules/foundation-sites/scss')
              ]
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
