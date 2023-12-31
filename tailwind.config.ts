import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          900: "var(--main-color-900)",
          800: "var(--main-color-800)",
        },
        prim: {
          900: "var(--primary-color-900)",
          800: "var(--primary-color-800)",
        },
        lit: {
          900: "var(--light-color-900)",
          800: "var(--light-color-800)",
        },
        drk: {
          900: "var(--dark-color-900)",
          800: "var(--dark-color-800)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
