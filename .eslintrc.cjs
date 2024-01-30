module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
  ignorePatterns: ['dist/*'],
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks'],
  rules: {
    'react/no-unescaped-entities': 0,
    'no-console': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'no-underscore-dangle': 'off',
    'react/jsx-pascal-case': [0, { allowAllCaps: true }],
    'import/extensions': [
      'off',
      {
        ignorePackages: true,
      },
    ],
  },
}
