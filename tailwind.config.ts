import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // ...
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       // The `screens` property in the Tailwind CSS configuration file is used to define custom breakpoints for responsive design. 
       screens: {
        'small': '300px', //@media (min-width: 300px) { ... }
        'xr': '550px', //@media (min-width: 550px) { ... }
        'ma': {'max': '550px'}, //@media (max-width: 550px) { ... }
      },
      colors: {
        'background-body': '#0a0a0a',
        'background-base': '#141414',
        'background-elevated-base': '#242424'
      },
    },
  },
  darkMode: "class",
}
export default config