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
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/i,
        use: [
          "css-loader",
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'ui.html',
      template: path.resolve(__dirname, 'src/ui.html'),
      cache: false,
      chunks: ['ui'],
    }),
    new HtmlInlineScriptPlugin([
      'ui.js'
    ]),
  ]
});
