import { defineConfig } from 'vite'
import vitePugPlugin from 'vite-plugin-pug-transformer'

export default defineConfig({
    plugins: [vitePugPlugin()],
})