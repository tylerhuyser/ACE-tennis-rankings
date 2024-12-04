import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import netlifyEdge from '@netlify/vite-plugin-netlify-edge'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  plugins: [react(), vike(), netlifyEdge()],
  build: {
    outDir: 'dist', // Confirm the output directory
  },
  passToClient: [
    'urlOriginal',
    'data'
  ],
  ssr: {
    noExternal: ['react-helmet-async', 'vike', 'vite', 'sirv'],
  },
}));
