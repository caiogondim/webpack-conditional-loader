const path = require('path')

module.exports = {
  entry: {
    simple: './test/test-files/simple.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  }
}
