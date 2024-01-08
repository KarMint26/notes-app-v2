/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx,css}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
