const base = require("./webpack.config");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = Object.assign({}, base, {
  mode: "development",
  entry: {
    index: './example/index.tsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "cuu",
      template: "example.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
});
