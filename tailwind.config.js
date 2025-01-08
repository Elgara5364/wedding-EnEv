/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        texture: "url('/img/texture.jpg')",
      },
    },
  },
  plugins: [],
};
