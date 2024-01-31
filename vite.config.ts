import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    ssr: true, // Enable SSR build
    outDir: 'dist/server', // Specify the output directory for SSR build
    rollupOptions: {
      input: path.resolve(__dirname, 'src/entry-server.jsx'), // Specify your SSR entry
    },
  },
});

