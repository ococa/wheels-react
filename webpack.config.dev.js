const base = require("./webpack.config");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = Object.assign({}, base, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "cuu",
      template: "index.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
});
