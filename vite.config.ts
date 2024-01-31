
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import the path module

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    ssr: true, // Enable SSR build
    outDir: 'dist/server', // Specify the output directory for SSR build (as a directory, not a file)
    rollupOptions: {
      input: path.resolve(__dirname, './src/entry-server.jsx'), // Specify your SSR entry
    },
  },
  // Add server configuration here if needed for development
});
