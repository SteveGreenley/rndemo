module.exports = {
  root: true,
  extends: '@react-native-community',
  "rules": {
    "eslint-comments/no-unused-disable": 0,
    "react-native/no-inline-styles": 0,
    "prettier/prettier": 0,
    "comma-dangle": [
      1,
      "only-multiline"
    ],
    "no-trailing-spaces": [
      1
    ],
    "import/prefer-default-export": 0,
    "no-console": 0,
    "promise/avoid-new": "off",
    "react/display-name": "off",
    "global-require": "off",
    "indent": ["warn", 2],
    "object-curly-spacing": ["warn", "always"]
  },
};
