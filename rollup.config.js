import uglify from 'rollup-plugin-uglify';

export default {
  input: 'main.js',
  external: ['js-cookies'],
  plugins: [
    uglify()
  ],
  output: {
    format: 'umd',
    file: 'dist.js',
    name: 'is-cookie-http-only'
  }
};

