const WorkboxPlugin = require('workbox-webpack-plugin')

/*
 * 这里也可以使用 WorkboxPlugin.InjectManifest({}) 配置
 * 但是需要 配置 swSrc 指明模板 service-worker 文件
 * WorkboxPlugin.GenerateSW({}) 可以直接生成 service-worker 文件
 */
const workboxConfig = new WorkboxPlugin.GenerateSW({
  cacheId: 'vtmp', // 设置前缀
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

module.exports = workboxConfig
