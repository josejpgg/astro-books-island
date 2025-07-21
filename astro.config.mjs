// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

import vercel from '@astrojs/vercel';

export default defineConfig({
  adapter: vercel(),
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false
  },
  env: {
    schema: {
      PUBLIC_SHOW_BUY_BUTTON: envField.boolean({ default: true, context: 'server', access: 'public' }),
      PUBLIC_SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public' })
    }
  },
  server: {
    host: true,
  }
});