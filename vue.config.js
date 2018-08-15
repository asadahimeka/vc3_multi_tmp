const { pages, aliases, workboxConfig } = require('./config')

module.exports = {
  baseUrl: process.env.NODE_ENV == 'development' ? '/' : '',
  // outputDir: undefined,
  // assetsDir: undefined,
  // runtimeCompiler: undefined,
  // parallel: undefined,
  pages,
  productionSourceMap: false,
  /*
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  */
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
      ...aliases
    }
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(workboxConfig)
    }
  }
}
