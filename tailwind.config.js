/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      // Add specific heights for mobile responsiveness
      height: {
        screen: '100vh',
        'screen-small': '100svh', // For mobile browsers
      },
      // Add specific widths for the cards
      width: {
        'card-lg': '474px',
        'card-sm': '265px',
      },
      // Add custom box shadows
      boxShadow: {
        'card': '0px 24px 48px rgba(0, 0, 0, 0.1)',
        'card-sm': '0px 0px 24px rgba(8, 17, 35, 0.1)',
      },
      // Add custom border radius
      borderRadius: {
        'card': '24px',
      },
    },
  },
  plugins: [],
}