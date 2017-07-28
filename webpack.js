const path = require('path')
const conditionalLoader = require('./src')

module.exports = {
  entry: {
    'env-var-truthy': './test/test-files/env-var-truthy.js',
    'env-var-falsey': './test/test-files/env-var-falsey.js',
    'falsey': './test/test-files/falsey.js',
    'truthy': './test/test-files/truthy.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    libraryTarget: 'umd'
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
