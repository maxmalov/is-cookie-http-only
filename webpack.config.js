module.exports = {
  entry: './main.js',
  devtool: 'source-map',
  output: {
    filename: 'dist.js',
    library: 'isCookieHttpOnly',
    libraryTarget: 'umd'
  }
};