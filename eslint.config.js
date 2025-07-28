const js = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
  js.configs.recommended,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-var-requires': 'error',
      'no-console': 'off',
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-vars': 'off', // Disable base rule in favor of TypeScript rule
    },
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'examples/**',
      'tests/**',
      'coverage/**',
      '**/*.test.ts',
      '**/*.test.js',
      'jest.config.ts',
      'eslint.config.js',
    ],
  },
];