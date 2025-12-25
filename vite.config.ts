import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), /**
    Fast Refresh (hot module replacement for React components)
    JSX/TSX transformation
    React-specific optimizations */
    tailwindcss() //handles CSS processing and optimization without needing PostCSS configuration.
  ],
})

