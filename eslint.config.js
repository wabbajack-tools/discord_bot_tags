import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import * as tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['dist', 'build', 'node_modules', '.venv']
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['src/**/*.{js,jsx,ts,tsx,vue}'],
    rules: {
      'vue/multi-word-component-names': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    },
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        sourceType: 'module',
        ecmaVersion: 'latest'
      }
    }
  }
]

