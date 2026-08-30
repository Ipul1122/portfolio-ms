import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base so assets load correctly on GitHub Pages (https://<username>.github.io/<repo>/) as well as custom domains and localhost
  base: './',
  server: {
    port: 3000,
    open: false,
  },
});
