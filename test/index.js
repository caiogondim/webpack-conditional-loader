const util = require('util')
const webpack = util.promisify(require('webpack'))
const webpackConfig = require('../webpack.js')

function build() {
  return webpack(webpackConfig)
}

build()
  .then(() => {
    console.log('Done')
  })
  .catch((error) => console.error(error))
