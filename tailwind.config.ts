import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  "darkMode": "class",
  theme: {
    extend: {
      // The `screens` property in the Tailwind CSS configuration file is used to define custom breakpoints for responsive design. 
      screens: {
        'small': '300px', //@media (min-width: 340px) { ... }
      }
    },
  },
  plugins: [],
}
export default config