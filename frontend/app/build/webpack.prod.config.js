var webpack = require('webpack')
var config = require('./webpack.base.config')
var merge = require('webpack-merge')

if (process.env.NODE_ENV === 'production') {
  config = merge(config, {
    devtool:'#eval',//ビルドスピード最速の設定
  });

  // http://vue-loader.vuejs.org/en/workflow/production.html
  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    /*
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
    ),*/
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    //よく使われるモジュールに振るIDの桁数をより短くすることでよりコードを圧縮する。
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}

module.exports = config
