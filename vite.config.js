import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    sveltekit(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'MyWebSite',
        short_name: 'MySite',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0031f3',
        icons: [
          {
            src: '/icons/web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});













/*
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
});
*/
