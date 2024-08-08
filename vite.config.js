// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/job-resume/',  // Make sure this matches your repository name
  plugins: [react()]
})
