import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orangeRed: "#DA722C",
        deepBlue: "#057ADA",
        darkGray: "#023047",
        pureBlack: "#070917",
        softWhite: "#E8F7FB",
        vibrantBlue: "#6F7DFB",
        darkBlue: "#3B448F",
      },
      screens: {
        customemd: "1100px",
      },
    },
  },
  plugins: [],
} satisfies Config;
