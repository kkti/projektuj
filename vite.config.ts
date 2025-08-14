import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/projektuj/',
  build: { outDir: 'docs' },
  plugins: [react()],
})