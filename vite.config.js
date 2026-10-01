import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// IMPORTANT: base must match your GitHub repository name for GitHub Pages.
// Repo: Yomna-Abdelmegeed-Portfolio -> base: '/Yomna-Abdelmegeed-Portfolio/'
export default defineConfig({
  base: '/Yomna-Abdelmegeed-Portfolio/',
  plugins: [react(), tailwindcss()],
})
