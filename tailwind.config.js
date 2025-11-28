/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f5f0e4',
        'be-yellow': '#f2c13d',
        'act-green': '#0d6b63',
        'act-teal': '#0c8a7a'
      },
      fontFamily: {
        heading: ['var(--font-baloo)', 'cursive'],
        body: ['var(--font-grotesk)', 'sans-serif']
      },
      boxShadow: {
        blob: '0 15px 45px rgba(13, 107, 99, 0.18)',
        card: '0 10px 30px rgba(0,0,0,0.08)'
      },
      animation: {
        'wiggle-slow': 'wiggle 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.6s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg) translateY(0)' },
          '50%': { transform: 'rotate(2deg) translateY(-6px)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(242, 193, 61, 0.35)' },
          '50%': { boxShadow: '0 0 0 12px rgba(242, 193, 61, 0)' }
        }
      }
    }
  },
  plugins: []
};
