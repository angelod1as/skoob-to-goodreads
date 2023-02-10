/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: {
          header: "rgba(244, 241, 234, 1)",
          body: "rgba(244,241,234,0.5)",
        },
      },
    },
  },
  plugins: [],
}
