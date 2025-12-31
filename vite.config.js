import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dyadComponentTagger from '@dyad-sh/react-vite-component-tagger';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    dyadComponentTagger(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Ten Commandments Light Shedder',
        short_name: 'Light Shedder',
        description: 'AI-powered light shedder to evaluate actions against the Ten Commandments using biblical principles',
        theme_color: '#2563eb',
        background_color: '#ffffff',
        display: 'standalone',
        icon: 'src/assets/images/Ten Commandments Fiery Handwriting.png',
        start_url: '/',
        shortcuts: [
          {
            name: 'Light Shedder',
            short_name: 'Shedder',
            description: 'Analyze actions against the Ten Commandments',
            url: '/',
            icons: [
              {
                src: 'src/assets/images/Ten Commandments Fiery Handwriting.png',
                sizes: '192x192'
              }
            ]
          },
          {
            name: 'Learn Commandments',
            short_name: 'Learn',
            description: 'Study the Ten Commandments',
            url: '/',
            icons: [
              {
                src: 'src/assets/images/Ten Commandments Fiery Handwriting.png',
                sizes: '192x192'
              }
            ]
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,jpeg,svg,ico}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
  base: process.env.VITE_APP_BASE_PATH || '/',
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  define: {
    'process.env': {}
  }
});