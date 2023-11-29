# package紹介

```shell
yarn init
yarn add --dev typescript ts-loader webpack webpack-cli webpack-dev-server
```

※本番でも使うpackageは、`--save`、開発用は`--dev`とする

### 各package紹介

・`typescript` TypeScriptのコンパイラ

・`ts-loader` Webpackと連携してTypeScriptコンパイラを起動

・`webpack` 複数のファイルを一つのファイルにする

・`webpack-cli` コマンドラインでwebpackを使う

・`webpack-dev-server` 開発用webサーバーの起動 (ホットリロード)

### typescriptのコンパイルを起動するための設定ファイルの生成

```shell
yarn tsc --init
```

## コード整形Plugin (ESLintとPrettierの併用)

```shell
yarn add --dev eslint eslint-config-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin husky lint-staged
```

### 各packageの紹介

・`prettier` フォーマッタ

・`ESLint` リンター

・`eslint-config-prettier` フォーマットに関するeslintのルールを無効化するために必要

・`@typescript-eslint/eslint-plugin`　ESLintでtypescriptのチェックを行う

・`@typescript-eslint/parser` ESLintでtypescriptを解析できるようにする

・`husky` gitコマンドをフックに別コマンドを呼び出せる

・`lint-staged` commitしたファイル (stagingされてるファイル)にlintを実行することができる
