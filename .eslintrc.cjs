/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    './.eslintrc-auto-import.json',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'quotes': ['error', 'single'],
    'no-multi-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'no-multiple-empty-lines': 'error',
    'padded-blocks': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-in-parens': ['error', 'never'],
    'keyword-spacing': 'error',
    'arrow-spacing': 'error',
    'indent': ['error', 2],
    'comma-dangle': ['error', 'always-multiline'],

    '@typescript-eslint/no-explicit-any': 'off',

    'vue/multi-word-component-names': 'off',
  },
};
