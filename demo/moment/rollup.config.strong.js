import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'index.js',
  output: {
    file: 'result/rollup.strong.output.js',
    format: 'iife'
  },
  plugins: [
    babel(),
    uglify({
      mangle: {
        toplevel: true,
      }
    })
  ]
}
