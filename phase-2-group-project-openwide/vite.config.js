import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/phase-2-group-project-openwide/',
  plugins: [react()],
})
