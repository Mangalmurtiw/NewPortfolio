import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/NewPortfolio/'   // <repo-name> ko aapke GitHub repo name se replace karo
})

