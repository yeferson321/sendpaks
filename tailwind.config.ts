import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    // ...
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // The `screens` property in the Tailwind CSS configuration file is used to define custom breakpoints for responsive design.
    screens: {
      fo: "300px",
      // => @media (min-width: 300px) { ... }

      xs: "550px",
      // => @media (min-width: 550px) { ... }
      ...defaultTheme.screens,
      
    },
    extend: {
      screens: {
        ar: "1100px",
        // => @media (min-width: 1100px) { ... }
      },
      colors: {
        'base': '#121212',
        'highlight': '#1a1a1a',
        'press': '#000',
        'elevated-base': '#242424',
        'elevated-highlight': '#2a2a2a',
        'background-elevated-press': '#000',
        'body': '#0A0A0A',

        'elevate-base': '#1f1f1f',
        'neutral-border': 'rgb(64 64 64)',
        'green':'#20D27D',
        'orange': '#EF571C',   


        'custom-blue': '#0076ff',
      },
    },
  },

  darkMode: "class",
};
export default config;
