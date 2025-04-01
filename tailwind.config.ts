import { fontFamily } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,css}", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#000000",
      grey: {
        100: "#F7F7F7",
        200: "#F0F0F0",
        300: "#D2D2D2",
        400: "#B1B1B1",
        500: "#686868",
        600: "#212122",
      },
    },
    spacing: {
      none: "0",
      xxs: "0.125rem",
      xs: "0.25rem",
      sm: "0.375rem",
      md: "0.5rem",
      lg: "0.75rem",
      xl: "1rem",
      "2xl": "1.25rem",
      "3xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "2.5rem",
      "6xl": "3rem",
      "7xl": "4rem",
      "8xl": "5rem",
      "9xl": "6rem",
      "10xl": "8rem",
      "11xl": "10rem",
      "12xl": "12rem",
    },
    borderRadius: {
      none: "0",
      xxs: "0.125rem",
      xs: "0.25rem",
      sm: "0.375rem",
      md: "0.5rem",
      lg: "0.625rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.25rem",
      "4xl": "1.5rem",
      full: "9999px",
    },
    fontSize: {
      inherit: "inherit",
      "title-l": ["2rem", { lineHeight: "2.25rem", fontWeight: "900" }],
      "title-m": ["1.5rem", { lineHeight: "2rem", fontWeight: "900" }],
      "title-s": ["1.25rem", { lineHeight: "1.5rem", fontWeight: "900" }],
      "body-l": ["1.25rem", { lineHeight: "2rem" }],
      "body-l-black": ["1.25rem", { lineHeight: "2rem", fontWeight: "900" }],
      "body-l-bold": ["1.25rem", { lineHeight: "2rem", fontWeight: "700" }],
      "body-l-regular": ["1.25rem", { lineHeight: "2rem", fontWeight: "400" }],
      "body-m": ["0.9375rem", { lineHeight: "1.5rem" }],
      "body-m-black": [
        "0.9375rem",
        { lineHeight: "1.5rem", fontWeight: "900" },
      ],
      "body-m-bold": ["0.9375rem", { lineHeight: "1.5rem", fontWeight: "700" }],
      "body-m-regular": [
        "0.9375rem",
        { lineHeight: "1.5rem", fontWeight: "400" },
      ],
      "body-s": ["0.8125rem", { lineHeight: "1.25rem" }],
      "body-s-bold": [
        "0.8125rem",
        { lineHeight: "1.25rem", fontWeight: "700" },
      ],
      "body-s-regular": [
        "0.8125rem",
        { lineHeight: "1.25rem", fontWeight: "400" },
      ],
    },
    fontFamily: {
      sans: ["var(--font-roboto-sans)", ...fontFamily.sans],
    },
  },
} satisfies Config;

export default config;
