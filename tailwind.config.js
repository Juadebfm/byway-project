/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        bywayBlue: "#2563EB",
        bywayTextLight: "#64748B",
        bywayTextDark: "#0F172A",
        bywayBtnColor: "#334155",
        bywayDirBtnColor: "#94A3B8",
      },
    },
  },
  plugins: [],
};
