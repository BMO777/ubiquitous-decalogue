import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ubiquitous-decalogue/', // This should match your GitHub repo name
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  define: {
    'process.env': {}
  }
});