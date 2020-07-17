module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  parser: require.resolve('@typescript-eslint/parser'),
  plugins: ['@typescript-eslint'],
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended', 'prettier/react', 'prettier/@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    warnOnUnsupportedTypeScriptVersion: true,
  },
  root: true,
  settings: {
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] } },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
