const path = require('path');
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = (env, argv) => ({
  mode: 'production',

  entry: {
    code: './src/code.ts',
    ui: './src/ui.ts',
  },
  
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'ui.html',
      template: path.resolve(__dirname, 'src/ui.html'),
    }),
    new HtmlInlineScriptPlugin([
      'ui.js'
    ]),
  ]
});
