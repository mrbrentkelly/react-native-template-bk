module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended'],
  rules: {
    // Prettier
    'prettier/prettier': 1,

    // ESLint
    'comma-dangle': 0, // Conflicts with prettier
    'no-undef': 0, // Conflicts with TS

    // TS
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-inferrable-types': 1,
    '@typescript-eslint/explicit-member-accessibility': 1,
    '@typescript-eslint/explicit-function-return-type': [
      1,
      {
        allowExpressions: true,
      },
    ],

    // React
    'react/function-component-definition': 1,
    'react/jsx-boolean-value': [2, 'always'],
  },
};
