const path = require("path"); //引入path模块
const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}
module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: './', // 设置打包文件相对路径
  chainWebpack: (config) => {
    //配置路径别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@css", resolve("src/styles"))
      .set("@img", resolve("src/assets/img"))
  },
  //其他配置....
  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

      // 下面是下载的插件的配置
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 5,
        minChunkSize: 100
      })
    ],
  },


  //导入全局样式
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // 引入全局变量样式
        additionalData: `@import "~@css/variable.scss";`,
      },
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true,
  },

  devServer: {
    open: true, // 自动开启浏览器
  },
};