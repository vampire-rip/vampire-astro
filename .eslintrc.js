module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['xo-space', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      extends: ['xo-typescript/space'],
      files: ['*.ts', '*.tsx'],
    },
    {
      files: ['*.astro'],
      extends: ['xo-typescript/space'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/no-unknown-property': 'off',
        'react/no-unescaped-entities': 'off',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
};
