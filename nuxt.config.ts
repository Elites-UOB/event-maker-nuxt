// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vuestic/nuxt',
    '@vueuse/nuxt',
  ],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [],
    webFonts: {
      provider: 'google',
      fonts: {
        "sans": ['Poppins:200,300,400,500,600,700,800,900'],
      },
    },
  },
  vuestic: {
    // config: {
    //   // ...
    // },

    css: ['typography', 'reset','grid'],
  }
})
