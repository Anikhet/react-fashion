// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust based on your project's file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        coco: ['Coco Gothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
