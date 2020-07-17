<h1 align='center'>@arkrm/bionic</h1>

<div align='center'>

[![npm (scoped)](https://img.shields.io/npm/v/@arkrm/bionic)](https://www.npmjs.com/package/@arkrm/bionic)
[![GitHub issues](https://img.shields.io/github/issues/arkrm/bionic)](https://github.com/arkrm/bionic/issues)
[![GitHub forks](https://img.shields.io/github/forks/arkrm/bionic)](https://github.com/arkrm/bionic/network)
[![GitHub stars](https://img.shields.io/github/stars/arkrm/bionic)](https://github.com/arkrm/bionic/stargazers)
[![GitHub license](https://img.shields.io/github/license/arkrm/bionic)](https://github.com/arkrm/bionic/blob/master/License)

</div>

服务于[arkrm](https://github.com/arkrm)团队项目的 [prettier](https://prettier.io/) [eslint](https://eslint.org/) [stylelint](https://stylelint.io/) 的配置文件合集

> `stylelint` 暂未实现

## install

```bash
# yarn
yarn add @arkrm/bionic -D
# npm 
npm i @arkrm/bionic -D
```

## useage

```js
// .eslintrc.js

// for umi
module.exports = {
  extends: [require.resolve('@arkrm/bionic/eslint/umi')],
};

// for taro
module.exports = {
  extends: [require.resolve('@arkrm/bionic/eslint/taro')],
};

// .prettierrc.js
const prettierConfig = require('@arkrm/bionic/prettier');

module.exports = prettierConfig;
```