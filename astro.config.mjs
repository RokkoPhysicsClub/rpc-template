// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { BASE_URL } from './src/consts';

import relativeLinks from 'astro-relative-links';

// https://astro.build/config
export default defineConfig({
    site: BASE_URL,
    integrations: [mdx(), relativeLinks()],
    build:{
      format:"directory",
      assets:"astro"
    },
    outDir:"./docs"
});