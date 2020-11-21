const rules = require('./rules');
const htmlTags = require('./html-tags');

const forbidElements = htmlTags.map((tag) => ({
  element: tag.element,
  message: '在 Taro 中无法使用 HTML 标签。',
}));


module.exports = Object.assign({}, require('./base'), {
  rules: Object.assign({}, rules, {
    'react/forbid-elements': ['error', { forbid: forbidElements }],
  }),
});