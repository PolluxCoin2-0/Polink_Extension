/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Ensure this points to where your JSX/TSX files are located
  theme: {
    extend: {
      animation: {
        'slide-left-to-right': 'slideLeftRight 2s ease-in-out infinite',
      },
      keyframes: {
        slideLeftRight: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
