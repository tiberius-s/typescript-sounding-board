import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    silent: true,
  },
  resolve: {
    alias: {
      '@scripts': resolve(__dirname, './scripts'),
    },
  },
});
