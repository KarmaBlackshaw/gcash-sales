import pluginVue from 'eslint-plugin-vue'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Convert the module URL to a file path
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read and parse the globals.json file
const globalsPath = path.resolve(__dirname, './.eslintrc-auto-import.json')
const globalsContent = fs.readFileSync(globalsPath, 'utf-8')
const { globals } = JSON.parse(globalsContent)

export default [
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      globals,
    },
    rules: {
      'object-curly-spacing': ['error', 'always'],
      'vue/multi-word-component-names': 'off',
      'vue/no-deprecated-v-on-native-modifier': 'off',
      'prefer-const': 'error',
      'no-undef': 'error',
      'no-var': 'error',
      'vue/no-unused-properties': [
        'error',
        {
          'ignorePublicMembers': true,
          'groups': ['props', 'methods', 'computed', 'data'],
        },
      ],
      'padded-blocks': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'no-multiple-empty-lines': [
        'error',
        {
          'max': 1,
        },
      ],
      'key-spacing': [
        'error',
        {
          'beforeColon': false,
          'afterColon': true,
        },
      ],
      'space-infix-ops': 'error',
      'no-multi-spaces': 'error',
      'vue/html-indent': [
        'error',
        2,
        {
          'attribute': 1,
          'baseIndent': 1,
          'closeBracket': 0,
          'alignAttributesVertically': true,
          'ignores': [],
        },
      ],
      'comma-dangle': [
        'error',
        {
          'arrays': 'always-multiline',
          'objects': 'always-multiline',
          'imports': 'never',
          'exports': 'never',
          'functions': 'never',
        },
      ],
      'array-bracket-spacing': ['error', 'never'],
      'array-callback-return': 'error',
      'arrow-parens': ['error', 'as-needed'],
      'arrow-spacing': 'error',
      'block-spacing': 'error',
      'brace-style': 'error',
      'camelcase': 'off',
      'default-case': 'error',
      'eqeqeq': 'off',
      'indent': [
        'error',
        2,
        {
          'ignoredNodes': ['TemplateLiteral'],
          'SwitchCase': 1,
        },
      ],
      'no-alert': 'off',
      'no-await-in-loop': 'off',
      'no-console': 'off',
      'no-debugger': 'off',
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'no-labels': 'off',
      'no-loop-func': 'error',
      'no-new': 'off',
      'no-prototype-builtins': 'off',
      'no-return-await': 'error',
      'no-shadow': 'error',
      'no-useless-catch': 'off',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'semi': ['error', 'never'],
      'quotes': [
        'error',
        'single',
        {
          'avoidEscape': true,
        },
      ],
      'require-await': 'error',
      'template-curly-spacing': 'off',
      'vue/comma-spacing': [
        'error',
        {
          'before': false,
          'after': true,
        },
      ],
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/component-name-in-template-casing': ['error', 'PascalCase', {
        'registeredComponentsOnly': false,
      }],
      'vue/custom-event-name-casing': [
        'error',
        'kebab-case',
        {
          'ignores': ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'],
        },
      ],
      'vue/html-closing-bracket-newline': [
        'error',
        {
          'singleline': 'never',
          'multiline': 'always',
        },
      ],
      'vue/html-end-tags': 'error',
      'vue/html-self-closing': [
        'error',
        {
          'html': {
            'void': 'never',
            'normal': 'never',
            'component': 'always',
          },
          'svg': 'always',
          'math': 'always',
        },
      ],
      'vue/match-component-file-name': [
        'error',
        {
          'extensions': ['vue'],
          'shouldMatchCase': false,
        },
      ],
      'vue/max-attributes-per-line': [
        'error',
        {
          'singleline': 1,
        },
      ],
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/this-in-template': ['error', 'never'],
      'vue/v-bind-style': ['error', 'shorthand'],
      'vue/v-on-style': ['error', 'shorthand'],
    },
  },

]