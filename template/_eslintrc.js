module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // Prettier
    'prettier/prettier': [1, {
      "singleQuote": true,
      "trailingComma": "es5",
      "jsxBracketSameLine": true,
      "parser": "typescript",
      "tabWidth": 2,
      "printWidth": 100
    }],

    // ESLint
    'no-undef': 0, // Conflicts with TS

    // TS
    '@typescript-eslint/explicit-member-accessibility': 1,
    '@typescript-eslint/explicit-function-return-type': [1, {
      allowExpressions: true,
      allowTypedFunctionExpressions: false,
      allowHigherOrderFunctions: false,
    }],
    '@typescript-eslint/no-use-before-define': [2, {
      "functions": false,
    }],

    // React
    'react/jsx-boolean-value': [2, 'always'],
  }
};