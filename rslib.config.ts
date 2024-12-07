import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: 'es2021',
      dts: true,
    },
    {
      format: 'cjs',
      syntax: 'es2021',
    },
  ],
  source: {
    entry: {
      index: './src/index.ts'
    }
  },
  output:{
      charset:'utf8',
      target:'node'
  }
});