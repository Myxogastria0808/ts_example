# ESLintの設定方法

## 参考サイト URL

{% embed url="https://typescriptbook.jp/tutorials/eslint" %}

{% embed url="https://zenn.dev/manycicadas/books/b6f2d99b5208e9/viewer/c70a5d" %}

## 実際の`.eslintrc.js`ファイルの設定

```
```

`root`

```javascript
    root: true, //rootディレクトリの.eslintrc.jsを参照する
```

rootディレクトリの.eslintrc.jsを参照する

`env`

```javascript
    env: {
        browser: true, //ブラウザ対応
        es6: true, //es6対応
        node: true, //node.jsに対応
    },
```

trueにすると、ESLintがグローバル変数を認識するようになる

`parserOptions`

```javascript
    parserOptions: {
        sourceType: 'module', //moduleかscriptを指定 moduleにすることで、import文 export文 が利用できる。
        project: './tsconfig.json', // TypeScriptのLint時に参照するconfigファイルを指定
    },
```

`sourceType` $$\cdots$$ moduleかscriptを指定 moduleにすることで、import文 export文 が利用できる。

`project` $$\cdots$$typescriptのLint時に参照するconfigファイルを指定

`rules`

```javascript
```

`ルール名: [重大度, 設定値];` の形で設定する。

重大度

| 重大度 | 数値 | こうか |
| --- | -- | --- |
|     |    |     |
|     |    |     |
|     |    |     |
