const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'none', // https://webpack.js.org/configuration/mode/
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(), // 每次构建前删除 dist 的内容。
    new HtmlWebpackPlugin({
      title: 'front ci and cd demo',
      template: './src/index.html'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}