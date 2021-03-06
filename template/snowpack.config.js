module.exports = {
    mount: {
        public: { url: '/', static: true },
        src: { url: '/_dist_' }
    },
    plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-webpack'],
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
        port: 8080
    },
    buildOptions: {
        /* ... */
    },
    alias: {
        '@components': './src/components'
    }
};
