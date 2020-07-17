const rules = require('./rules');

module.exports = Object.assign({}, require('./base'), {
  rules: Object.assign({}, rules, {
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/**.test.{ts,js,jsx,tsx}', '**/**.spec.{ts,js,jsx,tsx}', '**/*/__test__/**/*',
        './config/**/*',
        '.umirc.ts'
      ],
    }],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^@/', '^@@/'],
        caseSensitive: true,
        commonjs: true,
      },
    ],
  }),
});