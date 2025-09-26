/**
 * @file vite.config.js
 * @purpose Vite build configuration for the React portfolio.
 * @author Alex Kachur
 * @since 2025-09-26
 * @description Includes the React plugin and the image optimization plugin
 * to automatically compress image assets during the build process.
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
    }),
  ],
  allowedHosts: [

    'comp229-react-portfolio-1d8e.onrender.com'

  ]
});