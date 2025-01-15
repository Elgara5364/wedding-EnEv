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
      // that is animation class
      animation: {
        fade: "fadeIn 2s ease-in-out",
        fadeR: "fadeRight 2s ease-in-out",
      },

      // that is actual animation
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, translate: "20px " },
          "100%": { opacity: 100 },
        },
      },
    },
  },
  plugins: [],
};
