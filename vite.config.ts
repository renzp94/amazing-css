import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path"
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: {
      "@": path.resolve(__dirname,'src')
    }
  },
  plugins: [react()],
  css:{
    postcss:{
      plugins:[
        autoprefixer({
          overrideBrowserslist: ['last 2 versions']
        })
      ]
    }
  }
})
