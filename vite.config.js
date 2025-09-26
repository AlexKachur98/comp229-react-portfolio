/**
 * @file vite.config.js
 * @purpose Vite build configuration for the React portfolio.
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Includes the React plugin, image optimization, and configuration
 * to allow the production preview to be hosted on Render.
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
  // Add this preview configuration block
  preview: {
    host: true, // This is often required for Docker-based hosting services
    port: 8080, // A common port for services like Render
    strictPort: true,
    allowedHosts: [
      'comp229-react-portfolio-1d8e.onrender.com'
    ]
  }
});