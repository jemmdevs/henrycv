/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  // Modo JIT para CSS mínimo y optimizado
  mode: 'jit',

  // Futuras características para mejor compatibilidad
  future: {
    hoverOnlyWhenSupported: true, // Evitar hover en dispositivos táctiles
  },

  theme: {
    extend: {
      colors: {
        background: '#111111',
        muted: '#71717a',
        'yellow-300': '#FDE047',
        'zinc-100': '#f4f4f5',
        'zinc-500': '#71717a',
        'zinc-600': '#52525b',
        'neutral-800': '#262626',
      },
      fontFamily: {
        inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'Cascadia Code', 'monospace'],
      },
      fontSize: {
        base: ['15px', '21px'],
        label: ['12px', '18px'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      gap: {
        '3': '12px',
      },
      // Transiciones optimizadas
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '400ms',
        'slower': '600ms',
      },
      // Animaciones fluidas
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },

  plugins: [],

  // Configuraciones experimentales para mejor rendimiento
  corePlugins: {
    // Desactivar preflight si ya tienes tu propio reset (opcional)
    // preflight: false,
  },
}
