import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       // The `screens` property in the Tailwind CSS configuration file is used to define custom breakpoints for responsive design. 
       screens: {
        'small': '300px', //@media (min-width: 340px) { ... }
      },
      colors: {
        'background-body': '#0a0a0a',
        'background-base': '#141414',
        'background-elevated-base': '#242424'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config