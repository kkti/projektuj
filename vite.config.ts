import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // kvůli GitHub Pages na adrese /projektuj/
  base: '/projektuj/',
  // ať se build rovnou nasazuje z docs/
  build: { outDir: 'docs', emptyOutDir: true }
})
