import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/convite-casamento-demo/', // Suporte para GitHub Pages (mutxado.github.io/convite-casamento-demo)
})
