// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/scss/global.scss",
    "~/assets/scss/_mixins.scss",
  ],
  build: {
    transpile: ["vuetify"],
  },
  imports: {
    autoImport: true,
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
    [
      "@nuxtjs/i18n",
      {
        customRoutes: "page",

        locales: [
          {
            code: "en-us",
            name: "English(US)",
            iso: "en-us",
            file: "en-US.json",
          },
          {
            code: "vi-vn",
            name: "Tiếng Việt",
            iso: "vi-vn",
            file: "vi-VN.json",
          },
        ],
        defaultLocale: ["en-us"],
        lazy: true,
        langDir: "locales",
        strategy: "prefix_and_default",
        baseUrl: "localhost:3000",
      },
    ],
    "@nuxt/image",
    "@vueuse/motion/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vee-validate/nuxt",
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_responsive.scss" as *;',
        },
      },
    },
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },

  // Taiwindcss
  tailwindcss: {
    cssPath: false,
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
  colorMode: {
    classSuffix: "",
  },

  // Page transition
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  // Env
  runtimeConfig: {
    NODE_ENV: process.env.NUXT_PUBLIC_NODE_ENV,
    public: {
      apiUrl: `${process.env.NUXT_PUBLIC_API_URL}/api/v1/` || "/api/v1",
    },
  },
});
