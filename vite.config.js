import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:500https://backend-nine-mocha-94.vercel.app', // backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
