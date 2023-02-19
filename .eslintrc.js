// eslint-disable-next-line @typescript-eslint/no-require-imports,@typescript-eslint/no-unsafe-call,unicorn/prefer-module
require('@rushstack/eslint-patch/modern-module-resolution');

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  extends: [
    'plugin:unicorn/recommended',
    'xo',
    'xo-space',
    'xo-typescript/space',
    'xo-react/space',
    'plugin:typescript-sort-keys/recommended',
    'plugin:jsx-a11y/strict',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    'simple-import-sort',
    'sort-keys-fix',
    'unused-imports',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/explicit-function-return-type': ['error'],
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    'arrow-body-style': ['error', 'always'],
    'capitalized-comments': 'off',
    'max-params': 'error',
    'new-cap': 'off',
    'no-console': [
      'error',
      {
        allow: ['debug', 'info', 'warn', 'error', 'table'],
      },
    ],
    'no-empty-static-block': 'off',
    'no-new-native-nonconstructor': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        endOfLine: 'crlf',
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-no-bind': 'error',
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        multiline: 'last',
        shorthandFirst: true,
      },
    ],
    'react/no-array-index-key': 'error',
    'react/no-unknown-property': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
  },
};
