module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-smart-import'),
    require('cssnano')
  ],
  input: 'bes-theme/css/*.css',
  output: 'bes-theme/css-out'
}
