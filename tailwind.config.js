/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pixel-gold': '#f7d51d',
        'pixel-red': '#e52521',
        'pixel-green': '#43b047',
        'pixel-blue': '#209cee',
        'pixel-purple': '#7c3aed',
        'pixel-bg': '#0f0f23',
        'pixel-card': '#1a1a3e',
        'pixel-dark': '#0a0a18',
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'monospace'],
        'retro': ['VT323', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
