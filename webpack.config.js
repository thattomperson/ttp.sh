const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");

const prod = process.argv.indexOf("production") !== -1;

console.log("production build:", prod);

module.exports = {
  entry: {
    main: path.resolve("src/index")
  },
  output: {
    filename: prod ? "js/[name].[chunkhash].js" : "js/[name].js",
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
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: { minimize: prod }
            },
            "postcss-loader"
          ]
        })
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: "image-webpack-loader",
        // Specify enforce: 'pre' to apply the loader
        // before url-loader/svg-url-loader
        // and not duplicate it in rules with them
        enforce: "pre"
      },
      {
        test: /\.(jpg|png)$/,
        loader: "file-loader",
        options: {
          name: "files/[hash].[ext]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
      filename: "../layouts/_default/baseof.html"
    }),
    new ExtractTextPlugin({
      filename: prod ? "css/style.[chunkhash].css" : "css/style.css",
      disable: false,
      allChunks: true
    })
  ]
};

if (prod) {
  class TailwindExtractor {
    static extract(content) {
      return content.match(/[A-z0-9-:\/]+/g) || [];
    }
  }

  module.exports.plugins.push(
    new PurgecssPlugin({
      paths: glob.sync(`layouts/**/*.html`),
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ["html"]
        }
      ]
    })
  );
}
