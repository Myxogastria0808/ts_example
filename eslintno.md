# ESLintの設定方法

## 参考サイト URL

{% embed url="https://typescriptbook.jp/tutorials/eslint" %}

{% embed url="https://zenn.dev/manycicadas/books/b6f2d99b5208e9/viewer/c70a5d" %}

## 実際の`.eslintrc.js`ファイルの設定

```javascript
module.exports = {
    root: true, // 上位ディレクトリにある他のeslintrcを参照しないようにする
    env: {
        browser: true, //ブラウザ対応
        es6: true, //es6対応
        node: true, //node.jsに対応
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended", // TypeScriptでチェックされる項目をLintから除外する設定
        "prettier", // prettierのextendsは他のextendsより後に記述する
        "prettier/@typescript-eslint",
    ],
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: 'module', //moduleかscriptを指定 moduleにすることで、import文 export文 が利用できる。
        project: './tsconfig.json', // TypeScriptのLint時に参照するconfigファイルを指定　(tsconfigRootDirからの相対パス)
        tsconfigRootDir: __dirname, //tsconfigRootDirはプロジェクトルートの絶対パスを指定する
    },
    rules: {}
}
```

### `root`

```javascript
    root: true, // 上位ディレクトリにある他のeslintrcを参照しないようにする
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

### `plugins`

```javascript
    plugins: ["@typescript-eslint"],
```

第三者が作成したルールをpluginsとして取り入れられる

### `parser`

```javascript
    parser: "@typescript-eslint/parser",
```

javascriptやtypescriptの構文解析を行うパーサを設定する

`@typescript-eslint/parser` $$\cdots$$ typescript及びjavascriptの構文解析を行うパーサ

### `parserOptions`

```javascript
    parserOptions: {
        sourceType: 'module', //moduleかscriptを指定 moduleにすることで、import文 export文 が利用できる。
        project: './tsconfig.json', // TypeScriptのLint時に参照するconfigファイルを指定　(tsconfigRootDirからの相対パス)
        tsconfigRootDir: __dirname, //tsconfigRootDirはプロジェクトルートの絶対パスを指定する
    },
```

`sourceType` $$\cdots$$ moduleかscriptを指定 moduleにすることで、import文 export文 が利用できる。

`project` $$\cdots$$typescriptのLint時に参照するconfigファイルを指定 (tsconfigRootDirからの相対パス)

`tsconfigRootDir` $$\cdots$$ プロジェクトルートの絶対パスを指定する

### `extends`

```javascript
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended", // TypeScriptでチェックされる項目をLintから除外する設定
        "prettier", // prettierのextendsは他のextendsより後に記述する
        "prettier/@typescript-eslint",
    ],
```

`"eslint:recommended"` $$\cdots$$ ESLintの標準プリセット



### `rules`

`example`

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

### Airbnb-baseのプリセット (TypeScript)

プリセットのinstall

```sh
yarn add -D \
  'eslint' \
  '@typescript-eslint/parser' \
  '@typescript-eslint/eslint-plugin'
```

`.eslintrc.js`

```javascript
    extends: [
        "airbnb-base", // javascriptのairbnbのプリセット
        "airbnb-typescript/base", // 上のプリセットに上書きさせる形でtypescript対応させる
        "plugin:@typescript-eslint/recommended-requiring-type-checking", //TypeScript ESLintが提供する推奨ルールセットで、型情報を要するルールを含む
    ],
```

### Airbnbのプリセット (JavaScript)

Reactとかを使うときは、こっちを使う

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

### Airbnb-baseのプリセット (JavaScript)

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
