import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lagomorigin.github.io',
  base: '/archihouz',
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/chong-tham-wc': {
      status: 301,
      destination: '/chong-tham-nha-ve-sinh',
    },
  },
});
