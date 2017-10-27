import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'

export default {
    entry: {
        app: './src'
    },
    output: {
        path: path.resolve('public'),
        filename: '[name].[hash].js'
    },
    plugins: [
        new CopyWebpackPlugin([{from: './src/static'}]),
        new HtmlWebpackPlugin(),
        new FaviconsWebpackPlugin('./src/resources/logo.jpg')
    ]
}