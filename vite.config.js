import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dyadComponentTagger from '@dyad-sh/react-vite-component-tagger';

export default defineConfig({
  plugins: [dyadComponentTagger(), react()],
  base: process.env.VITE_APP_BASE_PATH || '/', // Dynamic base path
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  define: {
    'process.env': {}
  }
});