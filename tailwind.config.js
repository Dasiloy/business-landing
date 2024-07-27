/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6fda44",
          dark: "#6fda44",
        },
        secondary: {
          light: "#E2F5DB",
          dark: "#172F0D",
        },
        bckg: {
          light: "#F7F8F9",
          dark: "#1A1A1A",
        },
        mainText: {
          light: "#000",
          dark: "#fff",
        },
        white: {
          light: "#fff",
          dark: "#252525",
        },
        Gray_100: {
          light: "#5e5e63",
          dark: "#c6c6c6",
        },
        Gray_200: {
          light: "#aeaeb2",
          dark: "#636363",
        },
        Gray_300: {
          light: "#c7c7cc",
          dark: "#48484a",
        },
        Gray_400: {
          light: "#d1d1d6",
          dark: "#3a3a3c",
        },
        Gray_500: {
          light: "#e5e5ea",
          dark: "#2c2c2e",
        },
        Gray_600: {
          light: "#525257",
          dark: "#1c1c1e",
        },
        info: {
          light: "#4a86ff",
          dark: "#4a86ff",
        },
        success: {
          light: "#3ecb6b",
          dark: "#3ecb6b",
        },
        warning: {
          light: "#feb546",
          dark: "#feb546",
        },
        danger: {
          light: "#fe3f60",
          dark: "#fe3f60",
        },
        "local-variable": {
          light: "#444",
          dark: "#B0B0B0",
        },
      },
      boxShadow: {
        dark: `box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25)`,
      },
    },
  },
  plugins: [],
};
