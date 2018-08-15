const {isDev, pages, alias, workboxConfig} = require('./util')

module.exports = {
  baseUrl: isDev ? '/' : '',
  // outputDir: undefined,
  // assetsDir: undefined,
  // runtimeCompiler: undefined,
  // parallel: undefined,
  pages,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/service': {
        target: 'http://192.168.0.162:8094',
        // secure: false,
        changeOrigin: true
        // pathRewrite: {
        //   '^/api': ''
        // }
      }
    }
  },
  css: {
    loaderOptions: {
      css: {
        localIdentName: '[hash:base64:8]'
      }
    }
  },
  configureWebpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias
    }
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(workboxConfig)
    }
  }
}
