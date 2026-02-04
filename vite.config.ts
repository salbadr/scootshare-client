import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { createHtmlPlugin } from 'vite-plugin-html';
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` (staging, production, etc.)
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(), /**
    Fast Refresh (hot module replacement for React components)
    JSX/TSX transformation
    React-specific optimizations */
      tailwindcss(), //handles CSS processing and optimization without needing PostCSS configuration.
      createHtmlPlugin({ //allows you to use EJS-style syntax in your HTML.
        inject: {
          data: {
            // Ensure your env variable is prefixed with VITE_ 
            // or access it directly if it's in your process
            cdnUrl: env.VITE_CDN_URL,
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})

