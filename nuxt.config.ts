// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vuestic/nuxt',
    '@vueuse/nuxt',
    ['nuxt-icon']
  ],
  unocss: {
    // presets
    autoImport: true,
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: {
      ignoreAttributes: ['label'],
    }, // enabled `@unocss/preset-attributify`,
    typography: true,
    // core options
    shortcuts: [],
    rules: [],
    webFonts: {
      provider: 'google',
      fonts: {
        "sans": ['Poppins:200,300,400,500,600,700,800,900'],
      },
    },
    preflights: [
      {
         getCSS: ({ theme }) => `
          * {
            font-family: ${theme['fontFamily']['sans']};
          }
          body {
            background: #27292B;
            padding: 0;
            margin: 0;
            direction: rtl;
          }
        `
      }
    ],
    theme: {
      height: {
        "main-content": "calc(100vh - 11rem)",
      },
      colors: {
        "dark": "#444444",
        "light": "#444444",
        "mid": "#B7B7B7",
        "error": "#FF493E",
        "warning": "#FFCC42",
        "success": "#0B84FF",
      }
    },
  },
  vuestic: {
    // config: {
    //   // ...
    // },

    css: ['typography', 'reset','grid'],
  },
})
