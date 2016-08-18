# readme

## フォルダ構成
.edirotconfig：editor設定ファイル  
.gitignore：git設定ファイル  
README.md：これ  
/public：  
　┣ /css：cssファイル  
　　┣ /xxxx：静的コンテンツディレクトリ  
　　┣ app.css  
　┣ /js：jsファイル   
　　┣ /xxxx：静的コンテンツディレクトリ  
　　┣ app.js  
　┣ /img：画像ファイル  
　　┣ /xxxx：静的コンテンツディレクトリ  
　　┣ /app  
　┣ /data：データファイル（json、フォント、映像等）  
　┣ index.html  
　┣ /xxxx：静的コンテンツディレクトリ  
/frontend  
　┣ /app：SPA開発フォルダ  
　　┣ /src：ソースフォルダ  
　　　┣ /components：vueコンポーネント  
　　　┣ /libs：サードパーティライブラリ  
　　　　┣ /js  
　　　　┣ /css  
　　　　┣ /sass  
　　　┣ /modules：プロジェクトライブラリ  
　　　　┣ /js  
　　　　┣ /css  
　　　　┣ /sass  
　　　┣ /pages：SPAページファイル  
　　　┣ /vuex(models)：モデルファイル  
　　　┣ main.js  
　　　┣ router.js  
　　┣ .babellrc：babel設定ファイル  
　　┣ .eslintrc.js：eslint設定ファイル  
　　┣ bs-config.js：browser-sync設定ファイル  
　　┣ karma-conf.js：karma設定ファイル  
　　┣ package.json：npm package設定ファイル  
　　┣ webpack.base.config.js：webpack設定基本ファイル  
　　┣ webpack.dev.config.js：webpack設定開発ビルド用ファイル  
　　┣ webpack.prod.config.js：webpack設定本番ビルド用ファイル  
　　┣ README.md  
