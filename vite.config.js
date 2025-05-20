import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../dist',            // Output folder (optional, for production builds)
    emptyOutDir: true
  },
  server: {
    // Optional: if you want to reach it from the network
    host: true,
    port: 5173
  }
});
