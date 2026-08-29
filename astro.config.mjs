import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  redirects: {
    '/chong-tham-wc': {
      status: 301,
      destination: '/chong-tham-nha-ve-sinh',
    },
  },
});
