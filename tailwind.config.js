/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JS/TS/TSX files in the src folder
    './public/index.html',         // Include index.html
  ],
  theme: {
    extend: {
      backgroundImage: {
        'page-gradient':'   linear-gradient(112.37deg, #131D4B 0.3%, #2A2752 93.8%)',

        'chat-gradient': 'linear-gradient(92.54deg, #0D00A1 0.56%, #1E1830 95.84%)',
      },
      
      boxShadow: {
        'custom': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', // Change alpha value if needed
      },
    },
  },
  plugins: [],
}
