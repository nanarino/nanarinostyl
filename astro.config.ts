import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
    integrations: [mdx(), icon()],
    scopedStyleStrategy: "where",
})
