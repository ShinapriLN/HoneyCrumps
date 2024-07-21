const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          light: '#D2B48C', // light brown
          DEFAULT: '#A0522D', // brown
          dark: '#8B4513', // dark brown
        },
        secondary: {
          light: '#ADD8E6', // light blue
          DEFAULT: '#87CEEB', // blue
          dark: '#4682B4', // dark blue
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [nextui()],
};
