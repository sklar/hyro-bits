import { defineConfig } from 'tsup';

import pkg from './package.json';

export default defineConfig({
  banner: {
    js: '/** Components v' + pkg.version + ' */',
  },
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  legacyOutput: true,
  minify: true,
  sourcemap: true,
});
