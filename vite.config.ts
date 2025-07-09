import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import vitePluginString from 'vite-plugin-string';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@features': path.resolve(__dirname, './src/features'),
      '@database': path.resolve(__dirname, './src/database'),
      '@app': path.resolve(__dirname, './src/app'),
      '@ui': path.resolve(__dirname, './src/shared/ui'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@widgets': path.resolve(__dirname, './src/shared/widgets'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@types': path.resolve(__dirname, './src/shared/types'),
      '@assets': path.resolve(__dirname, './assets'),
      '@components': path.resolve(__dirname, './src/shared/components'),
      "@config": path.resolve(__dirname, "./src/config"),
      "@utils": path.resolve(__dirname, "./src/shared/utils"),
      "@store": path.resolve(__dirname, "./src/shared/store"),
      "@pages": path.resolve(__dirname, "./src/app/pages"),
    },
  },

  plugins: [
    react(),
    tailwindcss(),
    vitePluginString({
      include: '**/*.md',
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/docs', // откуда копируем
          dest: 'docs', // куда кладём в dist
        },
      ],
    }),
  ],
  base: '/',

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router-dom')) return 'react-router';
            if (id.includes('framer-motion')) return 'framer-motion';
            if (id.includes('highlight.js')) return 'highlight';
            if (id.includes('react')) return 'react';
            return 'vendor';
          }
        },
      },
    },
  },
});
