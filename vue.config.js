const path = require("path");

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
          path.resolve(__dirname, "src/assets/styles/common/varColor.less"),
          path.resolve(__dirname, "src/assets/styles/common/varStyle.less")
      ]
    }
  },
  configureWebpack: {
      resolve: {
          alias: {
              "cmp": "@/components",
              "styles": "@/assets/styles",
              "views": "@/views"
          }
      }
  },
  devServer: {
    proxy: {
      // 主页关键字搜索
      "/ptapi": {
        target: "https://www.meituan.com",
        changeOrigin: true
      },
      // 切换城市页关键字搜索
      "/group/v1/area/search": {
        target: "https://apimobile.meituan.com",
        changeOrigin: true
      }
    }
  }
}
