import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    AstroPWA({
      registerType: 'autoUpdate',
      injectRegister: 'inline',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Savoy Beach Hotel & Thermal Spa',
        short_name: 'Savoy App',
        description: 'La tua Guest App esclusiva per il soggiorno a Bibione.',
        theme_color: '#050505',
        background_color: '#050505',
        display: 'standalone',
        start_url: '/',
        id: '/',
        icons: [
          {
            src: '/logo_prova_savoy_192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo_prova_savoy_512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{html,css,js,svg,png,jpg,jpeg,webp,json}']
      }
    })
  ]
});