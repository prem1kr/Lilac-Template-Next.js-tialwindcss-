/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#E6DED6",
        primary: "#1F3D2B",
      },
   
    fontFamily: {
      heading: ["var(--font-playfair)"],
      body: ["var(--font-inter)"],
    },
  },
},
  plugins: [],
};
