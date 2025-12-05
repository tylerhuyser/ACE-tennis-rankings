import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import Sitemap from 'vite-plugin-sitemap'
import { routesArray } from './src/routes.js'

const dynamicRoutes = routesArray

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  plugins: [
    react(),
    vike({prerender: true}),
    Sitemap({ hostname: 'https://rankings.gamesetblog.com', dynamicRoutes, changefreq: 'weekly' })
    ],
  build: {
    outDir: 'dist', // Confirm the output directory
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  // ssr: {
  //   noExternal: ['react-helmet-async', 'vike', 'vite', 'sirv'],
  // },
  // resolve: {
  //   alias: {
  //     'vike/server': '/node_modules/vike/dist/esm/node/runtime/index.js'
  //   }
  // }
}));
