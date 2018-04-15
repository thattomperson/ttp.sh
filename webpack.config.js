const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const prod = process.argv.indexOf("production") !== -1;

module.exports = {
  entry: {
    main: path.resolve("src/index")
  },
  output: {
    filename: prod ? "js/[name].[hash].js" : "[name].js",
    path: path.resolve("static"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.jpg$/,
        use: "url-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
      filename: "../layouts/partials/head.html"
    })
  ]
};

if (prod) {
  module.exports.plugins.push(
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css"
    })
  );
}
