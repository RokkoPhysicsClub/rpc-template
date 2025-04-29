// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { BASE_URL } from './src/consts';

import relativeLinks from 'astro-relative-links';

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

async function generateTags(){
  const files=import.meta.glob('./src/pages/works/*.mdx');
  const data_list = [];
  const tags = new Set();

  /**
   * @type {{name:string,articles:{link:string,title:string,description:string,image:string}[]}[]}
   */
  const result = [];

  for (const file in files) {
    const content = fs.readFileSync(file, 'utf-8');
    const { data } = matter(content);
    data.link = file.replace('./src/pages', '..');
    data_list.push(data);
  }

  data_list.forEach((data) => {
    if (data.tags) {
      data.tags.forEach((/** @type {string} */ tag) => {
        const content={link:data.link, title:data.title, description:data.description??"", image:data.image!=null?`..${data.image}`:""};
        if(tags.has(tag)){
          result.find(item => item.name === tag)?.articles.push(content);
        }else{
          result.push({name:tag, articles:[content]});
        }
        tags.add(tag);
      });
    }
  });
  
  const outPath = path.join('src', 'scripts', 'tags.json');
  fs.writeFileSync(outPath, JSON.stringify({tags:result}, null, 2), 'utf-8');
  console.log(`[tag generator] ${result.length} tags written to ${outPath}`);
}

// https://astro.build/config
export default defineConfig({
  site: BASE_URL,
  integrations: [
    mdx(),
    relativeLinks(),
    {
      name: "generate-tags",
      hooks: {
        'astro:build:before': async () => {
          await generateTags();
        },
      },
    }
  ],
  build:{
    format:"directory",
    assets:"astro"
  },
  outDir:"./docs",
  vite: {
    plugins: [
      {
        name: 'tags-generator',
        apply: 'serve', // devサーバー用
        configureServer(server) {
          generateTags();
          server.watcher.on('add', (file) => {
            if (file.startsWith('src/content/posts/')) {
              generateTags();
            }
          });
          server.watcher.on('change', (file) => {
            if (file.startsWith('src/content/posts/')) {
              generateTags();
            }
          });
          server.watcher.on('unlink', (file) => {
            if (file.startsWith('src/content/posts/')) {
              generateTags();
            }
          });
        },
      },
    ],
  },
});