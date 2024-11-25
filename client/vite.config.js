import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  plugins: [react(), vike({ prerender: true })],
  build: {
    outDir: 'dist', // Confirm the output directory
  },
}));
