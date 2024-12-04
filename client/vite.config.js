import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import netlifyEdge from '@netlify/vite-plugin-netlify-edge'
import Sitemap from 'vite-plugin-sitemap'
import { routesArray } from './src/routes.js'
import Inspect from 'vite-plugin-inspect';

const dynamicRoutes = routesArray

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  plugins: [react(), vike(), netlifyEdge(), Sitemap({ hostname: 'https://rankings.gamesetblog.com', dynamicRoutes, changefreq: 'weekly' }), Inspect()],
  build: {
    outDir: 'dist', // Confirm the output directory
    rollupOptions: {
      external: [
        "react-router-dom",
        "prop-types",
        "axios"
      ],
    },
  },
  ssr: {
    noExternal: ['react-helmet-async', 'vike', 'vite', 'sirv'],
  },
  resolve: {
    alias: {
      'vike/server': '/node_modules/vike/dist/esm/node/runtime/index.js'
    }
  }
}));
