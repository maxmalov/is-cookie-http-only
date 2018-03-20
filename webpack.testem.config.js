module.exports = {
  entry: './__tests__/main.test.js',
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: __dirname + '/__tests__',
    filename: 'test-bundle.js'
  }
};