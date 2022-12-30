/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        soMediaColorTheme: {
          primary: '#1b3e96',
          secondary: '#FEF9f6',
          info:'#1b3e96',
          accent: '#F2E9E3',
          neutral: '#000000', //text-black
          'base-100': '#ffffff', //bg-white
          'base-200': '#dee6fa'
        },
      },
      {
        dark: {
          primary: '#1b3e96',
          info:'#fbbd23',
          secondary: '#1F2937', //black
          accent: '#1F2937', 
          neutral: '#ffffff', //text-white
          'base-100': '#010308', //btn
          'base-200': '#161717'
        },
      }
    ]
    
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
