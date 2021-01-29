const path = require('path');

module.exports = (env, argv) => ({
  mode: 'production',

  entry: {
    code: './src/code.ts'
  },
  
  output: {
    filename: 'code.js',
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
  }
});
