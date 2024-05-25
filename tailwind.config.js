/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      invert: {
        20: "0.2",
      },
      colors: {
        light_root: "#d8f3dc",
        light_main_box: "#74c69d",
        light_question: "#c4fff9",
        light_select: "#c9184a",
        light_btn: "#40f9c8",
        light_text: "#08260A",
        light_hover: "#92d3b3",
        dark_root: "#16425b",
        dark_main_box: "#3a7ca5",
        dark_question: "#3c096c",
        dark_select: "#fbde21",
        dark_text: "#533131",
        dark_btn: "#5a189a",
        dark_hover: "#2d6080",
        dark_shadow: "#102f42",
      },
      boxShadow: {
        dark: "0px 0px 17px 3px rgba(15, 44, 62,1)",
        light: "0px 0px 17px 3px rgba(57,131,94,1)",
      },
      keyframes: {
        rocket: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-3cm) rotate(0deg)" },
          "100%": { transform: "translateY(0) rotate(180deg)" },
        },
      },
      animation: {
        rocket: "rocket 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
