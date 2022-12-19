// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vuestic/nuxt',
    '@vueuse/nuxt',
    ['nuxt-icon'],'nuxt-swiper',
    ['@nuxtjs/supabase'],
    '@kevinmarrec/nuxt-pwa',
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
            box-sizing: border-box;
          }
          body {
            background: #1E1E1E;
            padding: 0;
            margin: 0;
            direction: rtl;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            -o-user-select: none;
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
        "light": "#FFFFFF",
        "mid": "#B7B7B7",
        "error": "#FF493E",
        "warning": "#FFCC42",
        "success": "#0B84FF",
      }
    },
  },
  vuestic: {
    css: ['typography', 'reset','grid'],
  },
  pwa: {
    manifest: {
      name: "event",
      lang: "ar",
    },
    workbox: {
    //enabled: true
    }
  },
})