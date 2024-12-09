/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Ensure this points to where your JSX/TSX files are located
  theme: {
    extend: {
      
      
    },
  },

  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        'input:-webkit-autofill': {
          'box-shadow': '0 0 0px 1000px #000000 inset',
          '-webkit-text-fill-color': '#FFFFFF',
          'caret-color': '#FFFFFF',
        },
      });
    },
  ],


  
};
