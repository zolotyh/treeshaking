module.exports = {
  entry: './index.js',
  output: {
    filename: 'weback.output.js'
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
