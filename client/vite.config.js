import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  plugins: [react(), vike()],
  build: {
    outDir: 'dist', // Confirm the output directory
  },
  // ssr: {
  //   noExternal: ['react-helmet-async'],
  // },
  passToClient: [
    'urlOriginal',
    'data'
  ]
}));
