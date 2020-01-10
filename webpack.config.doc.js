const base = require('./webpack.config');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, base, {
  mode: 'production',
  entry: {
    // ...base.entry,
    index: './example/index.tsx',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'doc'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'cuu',
      template: 'index.html',
    }),
  ],
  // externals: {
  //   react: {
  //     commonjs: "react",
  //     commonjs2: "react",
  //     amd: "react",
  //     root: "React"
  //   },
  //   "react-dom": {
  //     commonjs: "react-dom",
  //     commonjs2: "react-dom",
  //     amd: "react-dom",
  //     root: "ReactDOM"
  //   }
  // }
});
