import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"

// https://vite.dev/config/
export default defineConfig({
  root: process.env.VITE_ROOT || path.resolve(__dirname),
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(process.env.VITE_ROOT || __dirname, 'src'),
    },
  },
  server: {
    host: true,
    strictPort: true,
    port: 8080
  }
})
