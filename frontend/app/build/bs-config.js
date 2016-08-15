historyApiFallback = require('connect-history-api-fallback')

module.exports = {
  'files': ['./**/*','../../public/**/*'],
  'server': {
    'baseDir': '../../public',
    'index': 'index.html',
    'middleware': [
      historyApiFallback()
    ]
  }
};
