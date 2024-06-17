import fluid, { extract, screens, fontSize } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract
  },
  safelist: [
    {
      pattern: /pt-.+/,
      variants: ["rg"]
    },
    {
      pattern: /pb-.+/,
      variants: ["rg"]
    },
    {
      pattern: /gap-y-.+/,
      variants: ["rg"]
    }
  ],
  theme: {
    screens,
    fontSize,
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        xl: "0",
      }
    },
    extend: {
      fontFamily: {
        "body": "var(--font-body)",
        "heading": "var(--font-hubot-sans-condensed)",
        "mono": "var(--font-commit-mono)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent": "#FD6746",
        "carbon": "#808080",
        "graphite": "#1A1919",
        "ice": "#DEDEDE",
        "white-80": "rgba(255, 255, 255, 0.8)",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    fluid
  ],
};
