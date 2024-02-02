/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#44403c",

          "secondary": "#f3f4f6",

          "accent": "#d1d5db",

          "neutral": "#1c1917",

          "base-100": "#292524",

          "info": "#67e8f9",

          "success": "#86efac",

          "warning": "#fdba74",

          "error": "#f87171",
        },
      },
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
