# husky + lintstaged

## 参考サイト URL

{% embed url="https://qiita.com/akym03/items/7e4db720a9e1bfad7747" %}

{% embed url="https://zenn.dev/risu729/articles/latest-husky-lint-staged" %}

## Gitのセットアップ

```bash
git init
```

## huskyとlintstagedのinstall

```bash
yarn add --dev husky lint-staged
```

## huskyのセットアップ

```bash
npx husky install
yarn install
```

## `package.json`

```javascript
    "script": {
        "prepare": "husky install"
    }
```

## pre-commit時に実行するlint-stagedを呼び出す

以下のコマンドで`.husky/pre-commit` に `yarn lint-staged` を書き込む

`set` $$\cdots$$ pre-commitファイルに上書きされる

※ こっちを使うのがいいかも？

```bash
yarn husky set .husky/pre-commit "yarn lint-staged"
```

`add` $$\cdots$$ pre-commitファイルに追記される

```bash
yarn husky add .husky/pre-commit "yarn lint-staged"
```

## `package.json`

走らせたい処理を書く

複数行の処理は、リストで書き込む

`"ファイルの種類": [処理内容]`

```javascript
    "lint-staged": {
        "*.{js, ts}": [
            "prettier --write \"./src/**/*.{js,ts}\"",
            "eslint --fix \"src/**/*.{js,ts}\""
        ]
    },
```

## lint-stagedを動かす

### 初回実行時 (なぜかlint-stagedを一回動かさないとうまくいかないときがある)

```bash
git add .
yarn lint-staged
git commit -m "commit msg"
```

### 通常実行

```bash
git add .
git commit -m "commit msg"
```
