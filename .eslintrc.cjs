module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
      'react-refresh',
      "react-hooks",
      "@typescript-eslint"
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "indent": [
        "error",
        "tab"
    ],
    "linebreak-style": [
        "error",
        "windows"
    ],
    "quotes": [
        "error",
        "double"
    ],
    "semi": [
        "error",
        "always"
    ]
  },
}