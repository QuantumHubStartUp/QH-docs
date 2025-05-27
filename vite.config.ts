import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import vitePluginString from 'vite-plugin-string'
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy'


// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      "@features": path.resolve(__dirname, './src/features'),
      "@database": path.resolve(__dirname, './src/database'),
      "@app": path.resolve(__dirname, './src/app'),
      "@ui": path.resolve(__dirname, './src/shared/ui'),
      "@entities": path.resolve(__dirname, './src/entities'),
      "@widgets": path.resolve(__dirname, './src/shared/widgets'),
      "@shared": path.resolve(__dirname, './src/shared'),
      "@types": path.resolve(__dirname, './src/shared/types'),
      "@assets": path.resolve(__dirname, './assets'),
      "@components": path.resolve(__dirname, './src/shared/components'),
    },
  },
  
  plugins: [
    react(),
    tailwindcss(),
    vitePluginString(
      {
        include: '**/*.md',
      
      },

    ),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/docs', // откуда копируем
          dest: 'docs'             // куда кладём в dist
        }
      ]
    })
  ],
  base: "/",

})
