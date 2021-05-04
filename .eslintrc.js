module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['**/specs/*.js'],
  rules: {
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'no-restricted-globals': 'off',
  },
};
