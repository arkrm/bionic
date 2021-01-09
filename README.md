# @arkrm/bionic

[![npm (scoped)](https://img.shields.io/npm/v/@arkrm/bionic)](https://www.npmjs.com/package/@arkrm/bionic)
[![GitHub issues](https://img.shields.io/github/issues/arkrm/bionic)](https://github.com/arkrm/bionic/issues)
[![GitHub forks](https://img.shields.io/github/forks/arkrm/bionic)](https://github.com/arkrm/bionic/network)
[![GitHub stars](https://img.shields.io/github/stars/arkrm/bionic)](https://github.com/arkrm/bionic/stargazers)
[![GitHub license](https://img.shields.io/github/license/arkrm/bionic)](https://github.com/arkrm/bionic/blob/master/License)

</div>

服务于[arkrm](https://github.com/arkrm)团队项目的 [prettier](https://prettier.io/) [eslint](https://eslint.org/) [stylelint](https://stylelint.io/) 的配置文件合集

> `stylelint` 暂未实现

## INSTALL

```bash
# install with yarn
yarn add @arkrm/bionic -D

# install with npm
npm i @arkrm/bionic -D
```

## USEAGE

```js
// .eslintrc.js
module.exports = {
  extends: [require.resolve("@arkrm/bionic/eslint/index")],
};

// .prettierrc.js
module.exports = require("@arkrm/bionic/prettier");
```

## Tips

- 适用于 `umi` 工程
- 适用于 [taro](https://github.com/nervjs/taro) 工程，但要求 `taro` 版本为 `3.x`, 且上层框架为 `react`

## VSCode config example

```json
// .vscode/settings.json
{
  "editor.tabSize": 2,
  "npm.packageManager": "yarn",
  "eslint.validate": ["javascript", "typescript", "typescriptreact"],
  "eslint.packageManager": "yarn",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.packageManager": "yarn"
}
```
