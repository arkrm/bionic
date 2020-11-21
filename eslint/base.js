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
  plugins: ['jest'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    warnOnUnsupportedTypeScriptVersion: false,
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
