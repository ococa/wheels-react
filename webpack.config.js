const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './lib/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'cuu', // 配置库的名字,
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        include: path.resolve(__dirname, 'lib'),
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'cuu',
    template: 'index.html'
  })],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
