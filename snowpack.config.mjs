/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        public: { url: '/', static: true },
        docs: { url: '/docs' },
        stylus: { url: '/stylus' },
    },
    plugins: [
        "@marlonmarcello/snowpack-plugin-pug",
        "snowpack-plugin-stylus"
    ],
    routes: [
        /* Enable an SPA Fallback in development: */
        // {"match": "routes", "src": ".*", "dest": "/index.html"},
    ],
    optimize: {
        /* Example: Bundle your final build: */
        // "bundle": true,
    },
    packageOptions: {
        /* ... */
    },
    devOptions: {
        openUrl: "/docs/cover.html"
    },
    buildOptions: {
        /* ... */
    },
}