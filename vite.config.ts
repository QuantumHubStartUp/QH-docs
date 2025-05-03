import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@styles': path.resolve(__dirname, './src/styles'),
      "@features": path.resolve(__dirname, './src/features'),
      "@database": path.resolve(__dirname, './src/database'),
      "@app": path.resolve(__dirname, './src/app'),
      "@ui": path.resolve(__dirname, './src/shared/ui'),
      "@entities": path.resolve(__dirname, './src/entities'),
      "@widgets": path.resolve(__dirname, './src/shared/widgets'),
      "@shared": path.resolve(__dirname, './src/shared'),
      "@types": path.resolve(__dirname, './src/shared/types'),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
