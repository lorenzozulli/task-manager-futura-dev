import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Task Manager',
        short_name: 'Task Manager',
        theme_color: '#ffcc5f',
        icons: [
          {
            src: 'assets/manifest-icons/pwa-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/manifest-icons/pwa-512.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ]
      }
    })
  ]
})
