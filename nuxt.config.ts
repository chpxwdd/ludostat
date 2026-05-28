// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  alias: {
    "@": "/src",
  },

  dir: {
    pages: "./src/app/routes",
    layouts: "./src/app/layouts",
  },

  css: ["./src/app/assets/fonts/roboto.css", "./src/app/assets/css/main.css"],
  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },

  modules: ["@nuxt/ui"],
});
