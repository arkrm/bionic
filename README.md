<h1 align='center'>@arkrm/bionic</h1>

<div align='center'>

[![GitHub issues](https://img.shields.io/github/issues/arkrm/bionic)](https://github.com/arkrm/bionic/issues)
[![GitHub forks](https://img.shields.io/github/forks/arkrm/bionic)](https://github.com/arkrm/bionic/network)
[![GitHub stars](https://img.shields.io/github/stars/arkrm/bionic)](https://github.com/arkrm/bionic/stargazers)
[![GitHub license](https://img.shields.io/github/license/arkrm/bionic)](https://github.com/arkrm/bionic/blob/master/License)

</div>

服务于[arkrm](https://github.com/arkrm)团队项目的 [prettier](https://prettier.io/) [eslint](https://eslint.org/) [stylelint](https://stylelint.io/) 的配置文件合集

> `stylelint` 暂未实现

## bionic

### install

```bash
# yarn 
yarn add @arkrm/bionic -D
# npm 
npm i @arkrm/bionic -D
```

### useage

```js
// .eslintrc.js
module.exports = {
  extends: [require.resolve('@arkrm/bionic/eslint')],
};

// .prettierrc.js
const bionic = require('@arkrm/bionic');

module.exports = {
  ...bionic.prettier,
};
```


## bionic-taro

> For [taro](https://github.com/NervJS/taro) project

### install

```bash
# yarn 
# eslint-config-taro 与项目 taro 版本号统一，根据实际确定
yarn add @arkrm/bionic-taro eslint@^6.8.0 eslint-config-taro@xxx -D
# npm 
npm i @arkrm/bionic-taro eslint@^6.8.0 eslint-config-taro@xxx -D
```

### useage

```js
// .eslintrc.js
module.exports = {
  extends: [require.resolve('@arkrm/bionic-taro/eslint')],
};

// .prettierrc.js
const bionic = require('@arkrm/bionic-taro');

module.exports = {
  ...bionic.prettier,
};
```