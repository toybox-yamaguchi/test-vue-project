# readme

## フォルダ構成

.  
├── .edirotconfig：editor設定ファイル  
├── .gitignore：git設定ファイル  
├── README.md  
├── frontend  
│   └── app：SPA開発フォルダ  
│       ├── README.md  
│       ├── .babellrc：babel設定ファイル  
│       ├── .eslintrc.js：eslint設定ファイル  
│       ├── bs-config.js：browser-sync設定ファイル  
│       ├── karma.conf.js：karma設定ファイル  
│       ├── package.json  
│       ├── src  
│       │   ├── components：vueコンポーネント  
│       │   ├── libs：サードパーティライブラリ  
│       │   ├── modules：プロジェクトライブラリ  
│       │   ├── pages：SPAページファイル  
│       │   ├── vuex：モデルファイル(models)  
│       │   ├── main.js  
│       │   └── router.js  
│       ├── test  
│       │   ├── cat_test.js  
│       │   ├── sample_test.js  
│       │   └── vuex_test.js  
│       ├── webpack.base.config.js：webpack設定基本ファイル  
│       ├── webpack.dev.config.js：webpack設定開発ビルド用ファイル  
│       └── webpack.prod.config.js：webpack設定本番ビルド用ファイル  
└── public  
    ├── css  
    │   ├── xxxx：静的コンテンツディレクトリ  
    │   └── app.css  
    ├── index.html  
    └── js  
        ├── xxxx：静的コンテンツディレクトリ  
        └── app.js  