import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

// Get all HTML files in the root directory
const htmlFiles = fs.readdirSync(__dirname)
  .filter(file => file.endsWith('.html'))
  .reduce((acc, file) => {
    const name = file.replace('.html', '')
    acc[name] = resolve(__dirname, file)
    return acc
  }, {})

export default defineConfig({
  base: './', // Using relative path for assets to work everywhere
  build: {
    rollupOptions: {
      input: htmlFiles
    }
  }
})
