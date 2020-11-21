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
// .eslintrc.js (for umi project)
module.exports = {
  extends: [require.resolve('@arkrm/bionic/eslint/umi')],
};

// .eslintrc.js (for taro project)
module.exports = {
  extends: [require.resolve('@arkrm/bionic/eslint/taro')],
};

// .prettierrc.js
module.exports = require('@arkrm/bionic/prettier');
```

## TIPS

+ [taro](https://github.com/nervjs/taro) 仅适用于 `>=3.x` 版本，且上层框架为 `react`

## VSCode config example

```json
// .vscode/settings.json
{
  "eslint.validate": ["javascript", "typescript", "typescriptreact"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
}
```