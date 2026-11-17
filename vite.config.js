import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'docs', // <-- Define a pasta docs como a raiz do Vite
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})