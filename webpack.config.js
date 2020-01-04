const path = require('path');

module.exports = {
  entry: {
    index: './lib/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'cuu', // 配置库的名字,
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        include: path.resolve(__dirname, 'lib'),
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      }
    ]
  },
};
