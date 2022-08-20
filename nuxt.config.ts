import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    ssr: false, 
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