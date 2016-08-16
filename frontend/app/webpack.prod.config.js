var webpack = require('webpack')
var config = require('./webpack.base.config')
var merge = require('webpack-merge')

if (process.env.NODE_ENV === 'production') {
  config = merge(config, {
    devtool:'#eval'
  });

  // http://vue-loader.vuejs.org/en/workflow/production.html
  config.plugins = (config.plugins || []).concat([
    // モジュールに対し、設定値等の値を注入できるプラグイン
    new webpack.DefinePlugin({
      'process.env': {
        // 警告ブロックが UglifyJS による圧縮中に自動的に削除される
        NODE_ENV: '"production"'
      }
    }),
    /*
    // bowerでとってきたmoduleをそのままrequireすることが可能。非常に便利。他の用途もあるんだろうけど知らない。
    // ※ bowerモジュールの中にはbower.jsonをignoreに設定しているものがあるため、bowerが動的に作成する.bower.jsonを参照する方が安全。
     new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
    ),*/
    // ライブラリ間で依存しているモジュールが重複している場合、二重に読み込まないようにする
    new webpack.optimize.DedupePlugin(),
    /*
    // 指定した変数を他のモジュール内で使用できるようにする。globalには置かない。
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
    }),*/
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
