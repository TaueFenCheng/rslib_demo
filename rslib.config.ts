import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: 'es2021',
      dts: true,
      autoExtension: false,
      output: {
        target: 'web',
        filename: {
          js: '[name].mjs'
        }
      }
    },
    {
      format: 'cjs',
      syntax: 'es2021',
      dts: true
    },
    {
      format: 'umd',
      syntax: 'es2021',
      umdName: 'utilslib',
      autoExtension: false,
      dts: true,
      output: {
        target: 'web',
        filename: {
          js: '[name].umd.js'
        }
      }
    }
  ],
  source: {
    entry: {
      index: './src/index.ts'
    }
  },
  output: {
    charset: 'utf8',
    target: 'node',
    cleanDistPath: true
  }
});
