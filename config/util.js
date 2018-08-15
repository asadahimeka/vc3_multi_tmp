const fs = require('fs')
const path = require('path')
const glob = require('glob')

const isDev = process.env.NODE_ENV == 'development'
const resolve = dir => path.join(__dirname, '..', dir)
const PAGE_PATH = resolve('src/pages')
const entries = function() {
  let entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
  let map = {}
  entryFiles.forEach(filePath => {
    // let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
    // map[filename] = filePath
    let m = /(pages\/(?:.+[^.js]))/.exec(filePath)[0]
    console.log('filePath: ', filePath)
    map[m.slice(m.indexOf('/') + 1, m.lastIndexOf('/'))] = filePath
  })
  isDev
    ? fs.writeFile(
      resolve('public/list.pages'),
      Object.keys(map),
      err => {
        if (err) throw err
        console.log('\nWRITE LIST SUCCESS.\n')
      }
    )
    : fs.existsSync(resolve('public/list.pages')) &&
      fs.unlink(
        resolve('public/list.pages'),
        err => {
          if (err) throw err
          console.log('\nDELETE LIST SUCCESS.\n')
        }
      )
  return map
}

module.exports = {
  isDev,
  resolve,
  entries
}
