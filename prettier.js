module.exports = {
  arrowParens: 'always',
  endOfLine: 'auto',
  overrides: [
    {
      files: '.prettierrc',
      options: { 'parser': 'json' }
    },
    {
      files: 'document.ejs',
      options: {
        parser: 'html',
      },
    },
  ],
  printWidth: 200,
  singleQuote: true,
  trailingComma: 'all',
};
