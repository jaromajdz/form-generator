/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
   extend: {
      colors: {
        primary: {
          '50': '#f4faf3',
          '100': '#e5f4e4',
          '200': '#cde7cb',
          '300': '#a4d3a2',
          '400': '#74b771',
          '500': '#519a4d',
          '600': '#3e7e3b',
          '700': '#336431',
          '800': '#2c502b',
          '900': '#264225',
          '950': '#132a13',
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

