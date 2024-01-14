module.exports = {
  content: [
    './Components/**/*.{js,ts,jsx,tsx}', 
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  
  theme: {
    extend: {
      letterSpacing: {
        'extra-wide': '0.2em', // Add your custom spacing value here
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}