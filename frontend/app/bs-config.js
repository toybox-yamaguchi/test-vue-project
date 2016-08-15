//SPA等でhistoryAPIを用いる場合はこれが必要になる
historyApiFallback = require('connect-history-api-fallback')

module.exports = {
  //ファイル変更監視対象の設定
  'files': ['./**/*','../../public/**/*'],
  //サーバーの設定
  'server': {
    'baseDir': '../../public',
    'index': 'index.html',
    'middleware': [
      historyApiFallback()
    ]
  }
};
