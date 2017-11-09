import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
    entry: {
        app: './src'
    },
    output: {
        path: path.resolve('public'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{from: './src/static'}]),
        new HtmlWebpackPlugin({
            title: 'fsociety'
        }),
        new FaviconsWebpackPlugin('./src/resources/logo.jpg'),
        new ExtractTextPlugin("styles.css"),
    ]
}