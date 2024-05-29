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
      ld: "320px",
      // => @media (min-width: 320px) { ... }
      xs: "550px",
      // => @media (min-width: 550px) { ... }
      ...defaultTheme.screens,
    },
    extend: {
      screens: {
       
      },
      colors: {
        'elevated-base': '#121212',

        'elevated-highlight': '#2a2a2a',
        'background-elevated-press': '#000',
        'body': '#0A0A0A',

        'elevate-base': '#1f1f1f',

        'green':'#0BD95D',

        'light-neutral': '#737373',
        'dark-neutral': '#d4d4d4',

        'light-border': '#e5e5e5',
        'dark-border': '#525252',

        'blue-base': '#0076ff',

        'blue-hover': '#0065db',

        'light-blue-hover': '#eff6ff',
        'dark-blue-hover': '#0076ff0d',




        
        'purple-custom': '#8109d0',




       
      },
    },
  },

  darkMode: "class",
};
export default config;
