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
        heading: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif']
      },
      boxShadow: {
        blob: '0 15px 45px rgba(13, 107, 99, 0.18)',
        card: '0 10px 30px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};
