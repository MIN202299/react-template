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
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': 'error',
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-newline': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',

  },
  ignorePatterns: [
    '*.svg',
  ],
}
