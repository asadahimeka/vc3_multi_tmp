const { resolve } = require('./util')

const aliases = {
  '@a': resolve('src/assets'),
  '@assets': resolve('src/assets'),
  '@p': resolve('src/pages'),
  '@pages': resolve('src/pages'),
  '@c': resolve('src/components'),
  '@comp': resolve('src/components'),
  '@components': resolve('src/components')
}

module.exports = aliases
