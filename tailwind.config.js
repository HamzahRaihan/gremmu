/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#F4F7FF",
        backgroundColor: "#EFFFFA",
      },
    },
  },
  plugins: [],
};
