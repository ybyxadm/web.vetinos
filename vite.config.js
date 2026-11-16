import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'docs',
  publicDir: 'public',
  plugins: [react()],
  base: '/web.vetinos/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
