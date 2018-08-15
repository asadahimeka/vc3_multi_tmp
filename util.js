const fs = require('fs')
const path = require('path')
const glob = require('glob')
const WorkboxPlugin = require('workbox-webpack-plugin')
const isDev = process.env.NODE_ENV == 'development'

const resolve = dir => path.join(__dirname, dir)

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

// const pages = isDev
//   ? {
const pages = {
  index: {
    // page 的入口
    entry: 'src/main.js',
    // 模板来源
    template: 'public/index.html',
    // 在 dist/index.html 的输出
    filename: 'index.html'
  },
  /*
    当使用只有入口的字符串格式时，
    模板会被推导为 `public/subpage.html`
    并且如果找不到的话，就回退到 `public/index.html`。
    输出文件名会被推导为 `subpage.html`。
    */
  // subpage: 'src/subpage/main.js'
  ...entries()
}
// : entries()

const alias = {
  '@a': resolve('src/assets'),
  '@assets': resolve('src/assets'),
  '@p': resolve('src/pages'),
  '@pages': resolve('src/pages'),
  '@c': resolve('src/components'),
  '@comp': resolve('src/components'),
  '@components': resolve('src/components')
}

/*
 * 这里也可以使用 WorkboxPlugin.InjectManifest({}) 配置
 * 但是需要 配置 swSrc 指明模板 service-worker 文件
 * WorkboxPlugin.GenerateSW({}) 可以直接生成 service-worker 文件
 */
const workboxConfig = new WorkboxPlugin.GenerateSW({
  cacheId: 'whwbcc', // 设置前缀
  skipWaiting: true, // 强制等待中的 Service Worker 被激活
  clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
  swDest: 'service-worker.js', // 输出 Service worker 文件
  // globPatterns: ['**/*.{html,js,css,png.jpg}'], // 匹配的文件
  // globIgnores: ['service-wroker.js'], // 忽略的文件
  runtimeCaching: [
    // 配置路由请求缓存
    {
      urlPattern: /.*\.js/, // 匹配文件
      handler: 'networkFirst' // 网络优先
    }
  ]
})

module.exports = {
  isDev,
  resolve,
  pages,
  alias,
  workboxConfig
}
