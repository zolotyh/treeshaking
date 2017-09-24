module.exports = {
  entry: './index.js',
  output: {
    filename: 'result/webpack.output.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
