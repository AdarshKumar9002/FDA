import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Node.js globals
      },
    },
    rules: {
      semi: ['error', 'always'], 
      camelcase: 'off', 
      'import/extensions': 'off',
      'no-console': ['warn', { allow: ['error'] }], // Allow console.error only
    },
    ignores: ['node_modules', 'eslint.config.mjs', '.prettierrc', 'postcss.config.js'], 
  },
  
  pluginJs.configs.recommended, // ESLint recommended rules
  
  // Prettier integration to avoid conflicts
  prettier,
  
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error', // Treat Prettier issues as errors
    },
  },
];
