/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        navy: {
          950: '#020818',
          900: '#040d20',
          800: '#071028',
          700: '#0a1535',
          600: '#0d1a42',
        },
        electric: '#00d4ff',
      },
      backgroundImage: {
        grid: `linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
               linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)`,
      },
      backgroundSize: {
        grid: '60px 60px',
      },
      animation: {
        'fade-in':    'fadeIn 0.5s ease forwards',
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'bounce-y':   'bounceY 2s ease-in-out infinite',
        'blink':      'blink 1s step-end infinite',
      },
      keyframes: {
        fadeIn:    { from: { opacity: 0 }, to: { opacity: 1 } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-16px)' } },
        pulseSlow: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.4 } },
        bounceY:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        blink:     { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
      },
    },
  },
  plugins: [],
};
