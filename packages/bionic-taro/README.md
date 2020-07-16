<h1 align='center'>@arkrm/bionic-taro</h1>

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
module.exports = {
  extends: [require.resolve('@arkrm/bionic-taro/eslint')],
};

// .prettierrc.js
const bionic = require('@arkrm/bionic-taro');

module.exports = {
  ...bionic.prettier,
};
```