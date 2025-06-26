// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: {enabled: process.env.NODE_ENV !== 'production'  },
  css: ['vuetify/styles'],
  build: {
    transpile: ['vuetify'],
  },
   vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },

})
