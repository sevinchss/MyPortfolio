/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        inf: "var(--inf)",
        read: "var(--read)",
        type: "var(--type)",
        quotes: "var(--quotes)",
        text: "var(--text)",
        social: "var(--social)",
        backround: "var(--backround)",
        secondary: "var(--secondary)",
        'dark-custom-radial': 'radial-gradient(71.04% 147.83% at 36.46% 0%, #9BEA9B 0%, #F6B5AC 31.05%, #7DC4C1 70.3%, #7DC4C1 100%)',
        'dark-radial': 'radial-gradient(63.89% 63.89% at 50% 50%, #9BEA9B 0%, #F6B5AC 50%, #7DC4C1 100%)',
        'custom-radial': 'radial-gradient(71.04% 147.83% at 36.46% 0%, #1E263F 0%, #2A2B3F 31.05%, #66444D 70.3%, #66444D 100%)',
        "radial": "radial-gradient(63.89% 63.89% at 50% 50%, #66444D 0%, #1E263F 100%)",
      },
      backgroundImage: {
        'dark-custom-radial': 'radial-gradient(71.04% 147.83% at 36.46% 0%, #9BEA9B 0%, #F6B5AC 31.05%, #7DC4C1 70.3%, #7DC4C1 100%)',
        'dark-radial': 'radial-gradient(63.89% 63.89% at 50% 50%, #9BEA9B 0%, #F6B5AC 50%, #7DC4C1 100%)',
        'custom-radial': 'radial-gradient(71.04% 147.83% at 36.46% 0%, #1E263F 0%, #2A2B3F 31.05%, #66444D 70.3%, #66444D 100%)',
        "radial": "radial-gradient(63.89% 63.89% at 50% 50%, #66444D 0%, #1E263F 100%)",
      },
      boxShadowColor: {
        'dark-custom-radial': 'radial-gradient(71.04% 147.83% at 36.46% 0%, #9BEA9B 0%, #F6B5AC 31.05%, #7DC4C1 70.3%, #7DC4C1 100%)',
        'custom-radial': 'radial-gradient(71.04% 147.83% at 36.46% 0%, #1E263F 0%, #2A2B3F 31.05%, #66444D 70.3%, #66444D 100%)',
      }
    },
    fontFamily: {
      'spartan': ["League Spartan"],
      'Raleway': ["Raleway"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

  },
  plugins: [],
})

