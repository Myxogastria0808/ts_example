# Babel

### babel本体のinstall

```sh
yarn add --dev @babel/core
```

### babel-loaderのinstall

```bash
yarn add --dev babel-loader
```

### 追加のbabelプリセットのinstall

ex) ES6 -> ES5に変換する

```bash
yarn add --dev @babel/preset-env
```

## `.babelrc`

利用するプリセットの設定を以下のようにする

```javascript
{
  "presets": ["@babel/preset-env"]
}
```

## `webpack.config.js`

```javascript
/** ↓ エディタで補完を効かせるための JSDoc */
/** @type {import('webpack').Configuration} */
const config = {
  module: {
    rules: [
      {
        // 拡張子 js のファイル（正規表現）
        test: /\.js$/,
        // ローダーの指定
        loader: "babel-loader",
      },
    ],
  },
};

// 設定を CommnJS 形式でエクスポート
module.exports = config;
```
