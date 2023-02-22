/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'bg-pri': '#000000',
        'bg-sec': '#171615',
        'txt-pri': '#ffffff',
        'txt-sec': '#6bc349',
      },
    },
    screens: {
      phone: "480px",
      // => @media (min-width: 480px) { ... }

      tablet: "760px",
      // => @media (min-width: 760px) { ... }

      phablet: "950px",
      // => @media (min-width: 950px) { ... }

      desktop: "1000px",
      // => @media (min-width: 1000px) { ... }
    },
  },
  plugins: [],
};
