/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        advent: {
          primary: '#2563eb',
          secondary: '#f7f8fa',
          light: '#f1f5f9',
          dark: '#1e293b',
        }
      }
    },
  },
  plugins: [],
}