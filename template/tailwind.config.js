module.exports = {
    purge: {
        enabled: true,
        content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
        options: {
            keyframes: true
        }
    },
    darkMode: 'class',
    theme: {
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: []
};
