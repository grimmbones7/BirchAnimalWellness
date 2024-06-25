/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "light",
  darkMode: ["selector", "[data-theme='light']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        light: {
          primary: "#b2bea9", // Light Sage Green as primary
          "primary-content": "#ffffff", // White for primary content
          secondary: "#8fa88b", // Soft Moss Green as secondary
          "secondary-content": "#ffffff", // White for secondary content
          accent: "#a9b99b", // Pale Olive Green as accent
          "accent-content": "#ffffff", // White for accent content
          neutral: "#f4f4f4", // Light grey for neutral
          "neutral-content": "#212638", // Darker text for neutral content
          "base-100": "#ffffff", // White background
          "base-200": "#f4f8ff", // Slightly off-white
          "base-300": "#e3e8ef", // Lighter grey
          "base-content": "#212638", // Main content color on base
          info: "#3da9fc", // Light blue for info
          success: "#34eeb6", // Success color
          warning: "#ffcf72", // Warning color
          error: "#ff8863", // Error color

          "--rounded-btn": "9999rem", // Fully rounded buttons

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      // Keep the existing dark theme as is
      {
        dark: {
          primary: "#b2bea9", // Light Sage Green as primary
          "primary-content": "#ffffff", // White for primary content
          secondary: "#8fa88b", // Soft Moss Green as secondary
          "secondary-content": "#ffffff", // White for secondary content
          accent: "#a9b99b", // Pale Olive Green as accent
          "accent-content": "#ffffff", // White for accent content
          neutral: "#f4f4f4", // Light grey for neutral
          "neutral-content": "#212638", // Darker text for neutral content
          "base-100": "#ffffff", // White background
          "base-200": "#f4f8ff", // Slightly off-white
          "base-300": "#e3e8ef", // Lighter grey
          "base-content": "#212638", // Main content color on base
          info: "#3da9fc", // Light blue for info
          success: "#34eeb6", // Success color
          warning: "#ffcf72", // Warning color
          error: "#ff8863", // Error color

          "--rounded-btn": "9999rem", // Fully rounded buttons

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};