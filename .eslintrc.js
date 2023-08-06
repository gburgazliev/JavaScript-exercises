module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'prefer-template': 'off',
    'no-plusplus': 'off',
    'no-mixed-operators': 'off',
    'consistent-return': 'off',
  },
};
