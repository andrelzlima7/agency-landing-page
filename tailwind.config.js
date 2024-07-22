/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violetButton: "var(--violet-button)",
        bgHeader: "var(--bg-header)",
        colorTextBold: "var(--colortext-bold)",
        greenPage: "var(--green-page)",
        bluePage: "var(--blue-page)",
        redPage: "var(--red-page)"
      },
    },
  },
  plugins: [],
};
