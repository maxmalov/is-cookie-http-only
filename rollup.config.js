import uglify from 'rollup-plugin-uglify';

export default {
  input: 'main.js',
  external: ['js-cookie'],
  plugins: [uglify()],
  output: {
    format: 'umd',
    file: 'dist.js',
    name: 'is-cookie-http-only',
    globals: {
      'js-cookie': 'Cookies',
      'is-cookie-http-only': 'isCookieHttpOnly'
    }
  }
};

