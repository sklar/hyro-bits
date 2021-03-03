import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';

import pkg from './package.json';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  external: [...Object.keys(pkg.peerDependencies), 'react/jsx-runtime'],
  input: pkg.source,
  output: {
    banner: '/** Hyro Bits v' + pkg.version + ' */\n',
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    typescript({
      declaration: true,
      declarationDir: 'dist/types',
      declarationMap: true,
      rootDir: 'src',
    }),
    filesize(),
  ],
};
