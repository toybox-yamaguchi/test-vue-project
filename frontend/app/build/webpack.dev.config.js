var webpack = require('webpack')
var config = require('./webpack.base.config')
var merge = require('webpack-merge')

module.exports = merge(config, {
  cache: true,
  debug: true,
  devtool: false,
  stats: {
    colors: true,
    reasons: false
  },
  plugins:(module.exports.plugins || []).concat([
    /*
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
    ),*/
    // compile時にエラーが出たらskipする。
    new webpack.NoErrorsPlugin(),
    /*
    // 指定した変数を他のモジュール内で使用できるようにする。globalには置かない。
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    })*/
  ])
});
