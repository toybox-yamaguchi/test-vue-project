var path = require('path')
var webpack = require('webpack')

//別ファイルとして出力するようにするプラグイン
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('css/[name].css');

setting = {
  path:{
    dist:{
      root:'../../../public/',
    }
  }
}

module.exports = {
  entry: {
    app:'./main.js'
  },
  output: {
    path: path.resolve(__dirname, setting.path.dist.root),
    filename: 'js/[name].js'
  },
  resolveLoader: {
    //ルートパスの設定
    root: [
      path.join(__dirname, '../node_modules')
    ],
  },
  module: {
    // loader：拡張子別で読み込み設定を行う
    // 「-loader」の記述は省略できる
    loaders: [
      //vueファイルを読み込んだ場合にvue-loaderを使用する。
      {
        test: /\.vue$/,
        loader: 'vue',
        loaders: {
          'scss': 'vue-style!css!sass'
        }
      },
      // cssファイルを読み込んだ場合にcss-loaderを使用する。
      {
        test: /\.css$/,
        loader: extractCSS.extract('style', 'css')//外部化する
      },
      // scssファイルを読み込んだ場合にcss-loaderを使用する。
      {
        test: /\.scss$/,
        loader: extractCSS.extract('style', 'css', 'sass')//外部化する
      },
      // jsファイルを読み込んだ場合にbabel-loaderを使用する。
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      // jsonファイルを読み込んだ場合にjson-loaderを使用する。
      {
        test: /\.json$/,
        loader: 'json'
      },
      // htmlファイルを読み込んだ場合にvue-html-loaderを使用する
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      // 画像ファイルを読み込んだ場合にurl-loaderを使用する
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        //クエリパラメーターの指定
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    extractCSS
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map',

  // 他の設定
  resolve: {
    //読み込む際に拡張子を省略できるようにする。jsはデフォルト。
    //extenstions: ['', '.js', '.json', '.html']

    //ファイル単位でaliasをはる
    alias: {
      //例
      //bar: path.join('bower_components/foo/plugins/bar.js')
    }
  },
}

//@app.js
//var bar = require('bar');//aliasが効いている
