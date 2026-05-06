import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { writeFile } from 'node:fs/promises';
import { blogPosts } from './src/Components/Blog/blogPostsData';

const SITE = 'https://matthewboyd04.github.io';

function escapeXml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function rssPlugin(): Plugin {
  return {
    name: 'generate-rss-feed',
    async writeBundle() {
      const items = blogPosts
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date))
        .map(
          (p) => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${SITE}/#/blog/${p.id}</link>
      <guid isPermaLink="true">${SITE}/#/blog/${p.id}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${escapeXml(p.summary)}</description>
    </item>`
        )
        .join('');

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Matthew Boyd | Blog</title>
    <link>${SITE}/</link>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Matthew Boyd's blog — software development, RL research, and projects.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

      await writeFile('dist/feed.xml', xml, 'utf-8');
    },
  };
}

export default defineConfig({
  plugins: [react(), rssPlugin()],
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['color-functions', 'global-builtin', 'import', 'if-function'],
      },
    },
  },
});
