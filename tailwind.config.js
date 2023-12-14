/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,js}",
  ],
  theme: {
   extend: {
      colors: {
        primary: {
          '50': '#f4f9f4',
          '100': '#e9f1e7',
          '200': '#d1e3cf',
          '300': '#accca9',
          '400': '#80ad7b',
          '500': '#5d8f58',
          '600': '#497445',
          '700': '#3c5c39',
          '800': '#324a30',
          '900': '#2b3e29',
          '950': '#142013',
        },
        'primary-contrast': {
          '50': '#fcfde8',
          '100': '#f6f9ce',
          '200': '#ecf39e',
          '300': '#ddea6c',
          '400': '#cadc3f',
          '500': '#acc121',
          '600': '#869a16',
          '700': '#667615',
          '800': '#515d17',
          '900': '#454f18',
          '950': '#242c07',
      },
    },
  },
  },
  plugins: [],
}

