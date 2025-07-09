/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "var(--clr-brand)",
        brand_100: "var(--clr-brand-100)",
        brand_opacity_50: "var(--clr-brand-transparent)",
        accent: "var(--clr-accent)",
        darkBrand: "#222",
      },
      fontFamily: {
        "Arada": ['Arada', 'sans-serif'],
        "Arada-Bold": ['Arada-Bold', 'sans-serif'],
        "Arabic": ['Tajawal', 'Arial']
      }
    },
  },
  plugins: [],
};
