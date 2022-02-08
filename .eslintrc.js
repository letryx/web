module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'next.config.js',
    'jest.config.js',
    'apollo.config.js',
    'src/lib/generated/**/*',
    'schema-loader.js',
    'auth0/*',
    'cloud-functions/**/*',
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['@typescript-eslint', 'react', 'destructuring', 'eslint-comments', 'eslint-plugin-import', 'promise'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.cjs'],
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': [0],
    'react/function-component-definition': [0],
    'react/jsx-no-useless-fragment': [0],
    indent: [0],
    quotes: ['error', 'single', { avoidEscape: true }],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'no-unused-expressions': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'eslint-comments/disable-enable-pair': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true },
    ],
    '@typescript-eslint/explicit-function-return-type': [0],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true,
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'snake_case', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
    ],
  },
  overrides: [
    {
      files: ['components/**/*.ts*'],
      excludedFiles: 'pages/**/*.tsx',
      rules: { 'import/no-default-export': 'error' },
    },
  ],
};
