/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {defineConfig} from 'vite'
// import vueDevTools from 'vite-plugin-vue-devtools' // TODO not working

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        // vueDevTools(),
        vue(),
        legacy()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    test: {
        globals: true,
        environment: 'jsdom'
    }
})
