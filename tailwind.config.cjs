/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.svelte'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2162FF',
                secondary: '#76FF03'
            }
        }
    },
    plugins: []
};