/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  safelist: [
    "bg-[url('https://elgara5364.github.io/wedding-EnEv/img/texture.jpg')]",
    "bg-[url('https://elgara5364.github.io/wedding-EnEv/img/texture.jpg')]",
  ],
  theme: {
    extend: {
      backgroundImage: {
        texture:
          "url('https://elgara5364.github.io/wedding-EnEv/img/texture.jpg')",
        texture2:
          "url('https://elgara5364.github.io/wedding-EnEv/img/texture2.jpg')",
      },
    },
  },
  plugins: [],
};
