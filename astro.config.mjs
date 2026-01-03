// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Desactivar base styles si no se necesitan (pequeña optimización)
      applyBaseStyles: true,
    }),
  ],

  // Configuración de build optimizada
  build: {
    // Inline CSS crítico menor a 4KB para evitar request adicional
    inlineStylesheets: 'auto',
    // Optimización de assets
    assets: '_astro',
  },

  // Prefetch para navegación más rápida
  prefetch: {
    // Prefetch de enlaces visibles para navegación instantánea
    prefetchAll: false,
    defaultStrategy: 'viewport',
  },

  // Compresión de HTML
  compressHTML: true,

  // Configuración de Vite para optimizaciones adicionales
  vite: {
    build: {
      // Chunk splitting optimizado
      cssCodeSplit: true,
      // Minificación con terser para mejor compresión
      minify: 'esbuild',
      // Target moderno para bundles más pequeños
      target: 'esnext',
      // Optimizar rollup
      rollupOptions: {
        output: {
          // Separar vendor chunks para mejor caching
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              // Lenis en su propio chunk
              if (id.includes('lenis')) {
                return 'lenis';
              }
              return 'vendor';
            }
          },
        },
      },
    },
    // Optimizaciones de desarrollo
    optimizeDeps: {
      // Pre-bundle de dependencias
      include: ['lenis'],
    },
  },
});
