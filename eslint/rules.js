module.exports = {
  '@typescript-eslint/consistent-type-assertions': 'warn',
  '@typescript-eslint/no-array-constructor': 'warn',
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
    },
  ],
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      args: 'none',
      ignoreRestSiblings: true,
      varsIgnorePattern: '^React',
    },
  ],
  '@typescript-eslint/no-use-before-define': [
    'warn',
    {
      functions: false,
      classes: false,
      variables: false,
      typedefs: false,
    },
  ],
  '@typescript-eslint/no-useless-constructor': 'warn',
  'default-case': 'off',
  'global-require': 'off',
  'import/extensions': 'off',
  'import/no-cycle': 'off',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: ['**/**.test.{ts,js,jsx,tsx}', '**/**.spec.{ts,js,jsx,tsx}', '**/*/__test__/**/*'],
    },
  ],
  'import/no-unresolved': [
    2,
    {
      ignore: ['^@/'],
      caseSensitive: true,
      commonjs: true,
    },
  ],
  'import/prefer-default-export': 'off',
  'jsx-a11y/anchor-is-valid': 'off',
  'jsx-a11y/click-events-have-key-events': 'off',
  'jsx-a11y/media-has-caption': 'off',
  'jsx-a11y/no-noninteractive-element-interactions': 'off',
  'jsx-a11y/no-static-element-interactions': 'off',
  'linebreak-style': 'off',
  'max-len': ['error', 200],
  'no-console': 'off',
  'no-dupe-class-members': 'off',
  'no-undef': 'off',
  'no-useless-constructor': 'off',
  'react/button-has-type': 'off',
  'react/jsx-filename-extension': ['error', { extensions: ['js', 'jsx', 'ts', 'tsx'] }],
  'react/jsx-key': ['error', { checkFragmentShorthand: true }],
  'react/jsx-props-no-spreading': 'off',
  'react/require-default-props': 'off',
  'react/prop-types': 'off',
}
