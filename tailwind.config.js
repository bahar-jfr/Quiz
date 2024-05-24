/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      invert: {
        20: "0.2",
      },
      colors:{
        light_root : "#d8f3dc",
        light_main_box:"#74c69d",
        light_question:"#c4fff9",
        light_select : "#c9184a",
        light_btn:"#40f9c8",
        light_text: "#08260A",
        dark_root : "#16425b",
        dark_main_box:"#3a7ca5",
        dark_question:"#3c096c",
        dark_select : "#fbde21",
        dark_text:"#533131",
        dark_btn:"#5a189a"
      }
    },
  },
  plugins: [],
};
