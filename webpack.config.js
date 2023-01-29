const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.js'],
  },  
  devtool: 'eval-source-map',
  mode : "development",
  output: {
    publicPath: 'public',
    filename: 'bundles.js',
    path: path.resolve(__dirname, 'public'),
  },
}