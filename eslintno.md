# ESLintの設定方法

## 参考サイト URL

{% embed url="https://typescriptbook.jp/tutorials/eslint" %}

{% embed url="https://zenn.dev/manycicadas/books/b6f2d99b5208e9/viewer/c70a5d" %}

## 実際の`.eslintrc.js`ファイルの設定

```
```

### `root`

```javascript
    root: true, //rootディレクトリの.eslintrc.jsを参照する
```

rootディレクトリの.eslintrc.jsを参照する

### `env`

```javascript
    env: {
        browser: true, //ブラウザ対応
        es6: true, //es6対応
        node: true, //node.jsに対応
    },
```

trueにすると、ESLintがグローバル変数を認識するようになる

### `parserOptions`

```javascript
    parserOptions: {
        sourceType: 'module', //moduleかscriptを指定 moduleにすることで、import文 export文 が利用できる。
        project: './tsconfig.json', // TypeScriptのLint時に参照するconfigファイルを指定
    },
```

`sourceType` $$\cdots$$ moduleかscriptを指定 moduleにすることで、import文 export文 が利用できる。

`project` $$\cdots$$typescriptのLint時に参照するconfigファイルを指定

`"eslint:recommended"` $$\cdots$$ ESLintの標準プリセット



### `extends`

```javascript
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended", // TypeScriptでチェックされる項目をLintから除外する設定
        "prettier", // prettierのextendsは他のextendsより後に記述する
        "prettier/@typescript-eslint",
    ],
```

### `rules`

```javascript
    rules: {
        'no-console': 'error',
        'camelcase': ['error', { properties: 'never' }],
    },
```

`ルール名: [重大度, 設定値];` の形で設定する。

<table><thead><tr><th width="125">重大度</th><th width="104">数値</th><th>効果</th></tr></thead><tbody><tr><td>off</td><td>0</td><td>ルールをオフにする</td></tr><tr><td>warn</td><td>1</td><td>警告するが終了コードに影響しない</td></tr><tr><td>error</td><td>2</td><td>警告し、終了コードを1にする</td></tr></tbody></table>

## ESLintの実行

```bash
yarn eslint eslintにかけたいディレクトリかファイル名
```

example

```bash
yarn eslint src
```

## ESLintの自動修復の実行

```bash
yarn eslinteslintにかけたいディレクトリかファイル名 --fix
```

example

```bash
yarn eslint rsc --fix
```

## ルールのプリセットを利用する

**ルールの変更は、rules で自分の好みの設定で上書きすれば行える。**

### ESLintの標準

```javascript
    extends: [
        "eslint:recommended"
    ],
```

### Airbnbのプリセット

プリセットのinstall

```sh
yarn add --dev eslint-config-airbnb
```

`.eslintrc.js`

```javascript
    extends: [
        "airbnb"
    ],
```

### Airbnb-baseのプリセット

プリセットのinstall

```bash
yarn add --dev eslint-config-airbnb-base
```

`.eslintrc.js`

```javascript
    extends: [
        "airbnb-base"
    ],
```
