// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "pruvious",
    "@nuxt/icon",
  ],

  colorMode: {
    preference: "dark",
    fallback: "dark",
  },

  googleFonts: {
    families: {
      Lato: {
        wght: [400, 700],
        ital: [400, 700],
      },
      Popppins: [500],
    },
  },

  pruvious: {
    jwt: {
      secretKey:
        "_WpOOEJFkkjPhXvGkyrvRXcFA4ttGL9atANv6H6CVe6FCecOa3r3NZKZtkEaZqu8",
    },
  },

  // nitro: {
  //   preset: "vercel",
  // },
});
