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
const {globals} = JSON.parse(globalsContent)

export default [
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      globals
    }
  },

]