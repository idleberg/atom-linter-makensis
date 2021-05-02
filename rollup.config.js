import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';

const production = !process.env.ROLLUP_WATCH;

const plugins = [
  commonjs(),
  json(),
  nodeResolve({
    preferBuiltins: true
  }),
  production && terser(),
  typescript({
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
    moduleResolution: 'node',
    resolveJsonModule: true
  })
];

export default [
  {
    input: 'src/linter.ts',
    output: {
      dir: 'lib',
      exports: 'default',
      format: 'cjs',
      sourcemap: production ? false : true
    },
    external: [
      'assert',
      'atom',
      'buffer',
      'child_process',
      'crypto',
      'electron',
      'events',
      'fs',
      'os',
      'path',
      'stream',
      'util'
    ],
    plugins: plugins
  },

];
