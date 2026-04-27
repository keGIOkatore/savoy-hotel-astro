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
      devOptions: {enabled: true},
      manifest: false,
      workbox: {
        globPatterns: ['**/*.{html,css,js,svg,png,jpg,jpeg,webp,json}']
      }
    })
  ]
});