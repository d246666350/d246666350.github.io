const Timestamp = new Date().getTime();
module.exports = {
  publicPath: process.env.NODE_ENV === "development" ? "/" : "./",
  outputDir: "build",
  assetsDir: "static",
  indexPath: "index.html",
  configureWebpack: {
    output: {
      filename: `static/js/[name].${Timestamp}.js`,
      chunkFilename: `static/js/[name].${Timestamp}.js`,
    },
  },

  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require("postcss-px2rem")({
            remUnit: 37.5,
          }),
        ],
      },
    },
  },
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    open: false,
    compress: false,
    proxy: {
      "/apis": {
        target: "xxxxxxx",
        changeOrigin: true,
        pathRewrite: {
          "^/apis": "",
        },
      },
    },
    overlay: {
      warning: false,
      errors: false,
    },
  },
};
