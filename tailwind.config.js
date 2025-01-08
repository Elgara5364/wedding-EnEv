/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  safelist: [
    "bg-[url('https://elgara5364.github.io/wedding-EnEv/img/texture.webp')]",
    "bg-[url('https://elgara5364.github.io/wedding-EnEv/img/texture2.jpg')]",
  ],
  theme: {
    extend: {
      fontFamily: {
        greatVibes: ["Great Vibes", "cursive"],
        josephine: ["Josefin Sans", "sans"],
      },
      backgroundImage: {
        texture:
          "url('https://elgara5364.github.io/wedding-EnEv/img/texture.webp')",
        texture2:
          "url('https://elgara5364.github.io/wedding-EnEv/img/texture2.jpg')",
      },
    },
  },
  plugins: [],
};
