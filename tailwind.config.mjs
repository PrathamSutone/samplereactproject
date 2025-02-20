/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: '#90A3BF',
        customDark: '#1A202C',
        customReviewer: '#596780',
        customDivider: '#C3D4E9',
        customBlue: '#3563E9',
        customBg: '#F6F7F9',
      },
      fontFamily: {
        jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
      }
    },
  },
  plugins: [],
};
