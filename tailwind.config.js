/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "hsl(259, 100%, 65%)",
      lightred: "hsl(0, 100%, 67%)",
      offwhite: "hsl(0, 0%, 94%)",
      lightgray: "hsl(0, 0%, 86%)",
      smokeygray: "hsl(0, 1%, 44%)",
      offblack: "hsl(0, 0%, 8%)",
      black: "hsl(0, 0%, 0%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
