/**
 * @file vite.config.js
 * @purpose Build configuration for React portfolio project using Vite. 
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Configures React plugin, image optimizer, and preview server. 
 * Allows flexible hosting on Render or other platforms.
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig(({ mode }) => {
  const plugins = [react()];

  if (mode === 'production') {
    plugins.push(
      ViteImageOptimizer({
        png: { quality: 80 },
        jpeg: { quality: 80 },
        jpg: { quality: 80 },
        webp: { quality: 80 },
        avif: { quality: 50 }
      })
    );
  }

  return {
    plugins,
    preview: {
      host: true,
      port: process.env.PORT || 8080, // dynamic for deployment
      strictPort: true,
      allowedHosts: [
        'comp229-react-portfolio-1d8e.onrender.com'
      ]
    }
  };
});
