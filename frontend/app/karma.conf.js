// Karma configuration
// Generated on Mon Aug 15 2016 01:06:20 GMT+0900 (JST)

module.exports = (config) => {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'test/**/*_test.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    plugins: [
      'karma-mocha',
      'karma-webpack',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader'// テストがコケた時に行番号等の情報を出す
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // add webpack as preprocessor
      'test/**/*.js': ['webpack', 'sourcemap']
    },

    // Karma実行時のwebpack実行内容 (webpack.config.jsとは別)
    // jsファイルをES6 → ES5に変換 (preprocessorsの設定でtest配下のみ)
    webpack: {
      devtool: '#inline-source-map',
      eslint: {
        formatter: require('eslint-friendly-formatter')
      },
      module: {
        // https://github.com/power-assert-js/babel-plugin-espower/issues/14
        exprContextCritical: false,
        preLoaders:[
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint'
          }
        ],
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'stage-2'],
              // http://babeljs.io/docs/plugins/transform-runtime/
              plugins: ['transform-runtime', 'babel-plugin-espower']
            }
          },
          {
            test: /\.json$/,
            loader: 'json'
          }
        ]
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    //変更監視間隔：250だと短すぎるので
    autoWatchBatchDelay:5000,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  })
}
