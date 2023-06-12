module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/index.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#ff0000', // Set the background color to red (#ff0000)
      },

      colors: {
        '8677E6': '#8677E6',
      },
    },
  },
  plugins: [],
};
