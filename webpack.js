const path = require('path')
const conditionalLoader = require('./src')

module.exports = {
  entry: {
    simple: './test/test-files/simple.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  resolveLoader: {
    alias: {
      'conditional-loader': path.join(__dirname, './src')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['conditional-loader']
    }]
  }
}
