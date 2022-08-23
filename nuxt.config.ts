import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // ssr: false,
    // hooks: {
    //     'vite:extendConfig' (config, { isClient }) {
    //       if (process.env.NODE_ENV !== 'development' && isClient) {
    //         config.build.rollupOptions.output.chunkFileNames = '[name]-[hash].js'
    //         config.build.rollupOptions.output.entryFileNames = '[name]-[hash].js'
    //       }
    //     }
    //   },
    css: [
        "vuetify/lib/styles/main.sass"
    ],
    build: {
        transpile: ["vuetify"]
    },
    modules: ['@nuxt/content',],
    components: true,
    vite: {
        define: {
            "process.env.DEBUG": false
        }
    }
})