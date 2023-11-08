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
    'default-case': 'off',
    'no-console': 'off',
    'no-lonely-if': 'off',
    'func-names': 'off',
    'prefer-arrow-callback': 'off',
    eqeqeq: 'off',
    'prefer-template': 'off',
    'no-plusplus': 'off',
    'no-mixed-operators': 'off',
    'consistent-return': 'off',
    'no-restricted-syntax': 'off',
  },
};
