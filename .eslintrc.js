module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin' , 'eslint-plugin-import'],
  extends: [
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'prettier/@typescript-eslint',
  ],
  root: true,
  env: {
      node: true,
      jest: true,
  },
  rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'padding-line-between-statements': [
          'error',
          { 'blankLine': 'always', 'prev': 'block-like', 'next': '*' },
          { 'blankLine': 'always', 'prev': 'if', 'next': "block-like" },
      ],
      'space-in-parens': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'always'],
      '@typescript-eslint/camelcase': 'off',
      'no-trailing-spaces': "error",
      'arrow-spacing': ["error", { "before": true, "after": true }],
      "import/order": ["error",{"groups": ["builtin", "external", "parent", "sibling", "index"]}],
      "quotes": [ "error", "single"]
  },
};