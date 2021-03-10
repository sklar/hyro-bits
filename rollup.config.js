import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import filesize from 'rollup-plugin-filesize';

import pkg from './package.json';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  external: [...Object.keys(pkg.peerDependencies), 'react/jsx-runtime'],
  input: pkg.source,
  output: {
    banner: '/** Components v' + pkg.version + ' */\n',
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    copy({
      copyOnce: true,
      targets: [{ src: 'src/assets/fonts', dest: 'dist' }]
    }),
    typescript({
      declaration: true,
      declarationDir: 'dist/types',
      declarationMap: true,
      exclude: ['**/*.stories.*'],
      rootDir: 'src',
    }),
    filesize(),
  ],
};
