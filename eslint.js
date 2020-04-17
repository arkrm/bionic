module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'airbnb', 'airbnb/hooks', 'plugin:prettier/recommended', 'prettier/react', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    extraFileExtensions: ['tsx'],
    warnOnUnsupportedTypeScriptVersion: true,
  },
  root: true,
  rules: {
    '@typescript-eslint/ban-ts-ignore': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/interface-name-prefix': ['error', 'always'],
    '@typescript-eslint/no-explicit-any': ['off'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-cycle': ['off'],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/*.test.tsx',
        '**/*.test.ts',
        '**/*.spec.tsx',
        '**/*.spec.ts',
        '__tests__/**/*',
        './config/**/*',
        '.umirc.ts',
        '*.config.ts',
        'setupTests.ts',
      ]
    }],
    'import/no-unresolved': [
      2,
      {
        ignore: ['^@/', '^@@/'],
        caseSensitive: true,
        commonjs: true,
      },
    ],
    'import/prefer-default-export': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'linebreak-style': 'off',
    'max-len': ['error', 200],
    'no-console': ['off'],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'styled-components',
            message: 'Please import from styled-components/macro.',
          },
        ],
        patterns: ['!styled-components/macro'],
      },
    ],
    'react/button-has-type': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['ts', 'tsx'] }],
    'react/jsx-props-no-spreading': ['off'],
  },
  settings: {
    'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] } },
  },
};
