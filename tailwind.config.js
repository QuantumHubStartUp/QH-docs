/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff',
          dark: '#1f2937',
        },
        text: {
          light: '#1f2937',
          dark: '#f9fafb',
        },
        primary: {
          light: '#3b82f6', // blue-500
          dark: '#60a5fa',  // blue-400
        },
        secondary: {
          light: '#6b7280', // gray-500
          dark: '#9ca3af',  // gray-400
        },
      },
    },
  },
  plugins: [],
}
