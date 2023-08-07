module.exports = {
  extends: [
    '@dcwjoy/react',
  ],
  plugins: [
    'react',
  ],
  rules: {
    'react/self-closing-comp': 'error',
    'react/no-unknown-property': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',

  },
  ignorePatterns: [
    '*.svg',
  ],
}
