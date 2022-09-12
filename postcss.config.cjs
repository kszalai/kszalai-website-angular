module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-preset-env'),
    require('postcss-simple-vars'),
    require('cssnano')
  ]
}
