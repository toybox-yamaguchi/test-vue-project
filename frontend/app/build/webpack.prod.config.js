var webpack = require('webpack')
var config = require('./webpack.base.config')
module.exports = config

//production設定時
if (process.env.NODE_ENV === 'production') {
  //.mapファイルの出力
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    //よく使われるモジュールに振るIDの桁数をより短くすることでよりコードを圧縮する。
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
