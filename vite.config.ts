import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
  visualizer({
    filename: 'stats.html',
    open: true,
    gzipSize: true,
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react': ['react', 'react-dom'],
          'three': ['three', '@react-three/fiber', '@react-three/drei'],
          'lucide-react': ['lucide-react'],
          'react-responsive': ['react-responsive'],
          'ui-components': [
            './src/components/ui/button.tsx',
            './src/components/ui/card.tsx',
            './src/components/ui/sidebar.tsx',
            './src/components/Context/theme-provider.tsx',
            './src/components/ui/tooltip.tsx',
            './src/components/ui/sidebar.tsx'
          ]
        }
      }
    }
  }
})
