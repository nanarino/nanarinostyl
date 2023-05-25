/** @type {import("snowpack").SnowpackUserConfig } */
export default {
    mount: {
        public: { url: '/', static: true },
        docs: { url: '/docs' },
        lib: { url: '/lib' },
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
        bundle: true,
        minify: true,
        // target: 'es2020',
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