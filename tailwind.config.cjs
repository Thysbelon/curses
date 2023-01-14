/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      "customblack",
      "light",
      "lofi",
      "cupcake",
      "corporate",
      "retro",
      "valentine",
      "garden",
      "aqua",
      "pastel",
      "wireframe",
      "winter",
      "cyberpunk",
      // 'bumblebee',
      // 'emerald',
      // 'fantasy',
      // 'cmyk',
      // 'autumn',
      // 'acid',
      // 'lemonade',
      "dark",
      "synthwave",
      "halloween",
      "forest",
      "black",
      "luxury",
      "dracula",
      "business",
      "night",
      "coffee",
      {
        forest: {
          ...require("daisyui/src/colors/themes")["[data-theme=forest]"],
          "base-content": "#f3f3f3",
          "base-100": "#111"
        },
      },
      
      {
        curses: {
          "color-scheme": "dark",
          primary: "#FC6471",
          // "primary-content": "#000000",
          secondary: "#55D6BE",
          accent: "#E5625E",
          "base-content": "#ACFCD9",
          "base-100": "#1C1F33",
          // "base-200": "#d41344",
          "base-300": "#151625",
          // neutral: "#272626",
          // "neutral-focus": "#343232",
          info: "#0000ff",
          success: "#008000",
          warning: "#ffff00",
          error: "#ff0000",
          "--rounded-box": ".8rem",
          "--rounded-btn": "0.2rem",
          "--rounded-badge": "0",
          "--animation-btn": "0",
          "--animation-input": "0.5rem",
          "--btn-text-case": "lowercase",
          "--btn-focus-scale": "1",
          "--tab-radius": "0",
        },
        staffy: {
          "color-scheme": "dark",
          primary: "#f4e32a",
          secondary: "#6b21a8",
          accent: "#00eb5e",
          "base-content": "#f4e32a",
          "base-100": "#333333",
          // "base-200": "#070707",
          "base-300": "#212121",
          neutral: "#272626",
          "neutral-focus": "#343232",
          info: "#0000ff",
          success: "#008000",
          warning: "#ffff00",
          error: "#ff0000",
          "--rounded-box": ".8rem",
          "--rounded-btn": "0.2rem",
          "--rounded-badge": "0",
          "--animation-btn": "0",
          "--animation-input": "0.5rem",
          "--btn-text-case": "lowercase",
          "--btn-focus-scale": "1",
          "--tab-radius": "0",
        },
        matrix: {
          "color-scheme": "dark",
          primary: "#fff",
          secondary: "#fff",
          accent: "#00eb5e",
          "base-content": "#00eb5e",
          "base-100": "#090909",
          "base-200": "#070707",
          "base-300": "#020202",
          neutral: "#272626",
          "neutral-focus": "#343232",
          info: "#0000ff",
          success: "#008000",
          warning: "#ffff00",
          error: "#ff0000",
          "--rounded-box": ".8rem",
          "--rounded-btn": "0.2rem",
          "--rounded-badge": "0",
          "--animation-btn": "0",
          "--animation-input": "0.5rem",
          "--btn-text-case": "lowercase",
          "--btn-focus-scale": "1",
          "--tab-radius": "0",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
