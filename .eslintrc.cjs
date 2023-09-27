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
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-newline': 'error',
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-max-props-per-line': 'error',
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'unused-imports/no-unused-imports': 'off',
  },
  ignorePatterns: [
    '*.svg',
  ],
}
