module.exports = {
  extends: [
    'react-app',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-alert': ['error'],
  },
  settings: {
    react: {
      version: '999.999.999',
    },
  },
};
