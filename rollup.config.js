import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    // { file: 'dist/cjs/index.js', format: 'cjs' },
    { file: 'dist/esm/index.js', format: 'esm' },
    { file: 'dist/umd/index.js', format: 'umd', name: pkg.name },
  ],
  plugins: [
    json(),
    typescript(),
    commonjs(),
    resolve(),
    ...(process.env.NODE_ENV === 'production' ? [terser()]: [])
  ]
};
