/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#8B5CF6',
        'neon-cyan': '#00E5FF',
        'dark-bg': '#0a0a0f',
        'dark-card': '#1a1a24',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.5)' 
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          'from': {
            textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #8B5CF6, 0 0 40px #8B5CF6',
          },
          'to': {
            textShadow: '0 0 20px #fff, 0 0 30px #00E5FF, 0 0 40px #00E5FF, 0 0 50px #00E5FF',
          },
        },
      },
      backdropBlur: {
        'glass': '15px',
      },
    },
  },
  plugins: [],
}

