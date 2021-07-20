import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';

import pkg from './package.json';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies)],
  input: pkg.source,
  output: {
    banner: '/** Components v' + pkg.version + ' */\n',
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    filesize(),
    typescript({
      declaration: true,
      declarationDir: 'dist/types',
      declarationMap: true,
      exclude: ['**/node_modules', '**/.*/', '**/*.stories.*', 'icons', 'react-*'],
    }),
  ],
};
