// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH let the same build run on the real domain (served from "/")
// and on GitHub Pages project sites (served from "/<repo>/").
const base = process.env.BASE_PATH || '/';

/** Prefix root-relative links in Markdown content with the base path. */
function rehypeBaseLinks() {
  const prefix = base.replace(/\/$/, '');
  /** @param {any} node */
  const walk = (node) => {
    const href = node.properties?.href;
    if (node.tagName === 'a' && typeof href === 'string' && href.startsWith('/') && !href.startsWith('//')) {
      node.properties.href = prefix + href;
    }
    node.children?.forEach(walk);
  };
  return (/** @type {any} */ tree) => {
    if (prefix) walk(tree);
  };
}

export default defineConfig({
  site: process.env.SITE_URL || 'https://dn-engage.eu',
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
  markdown: { rehypePlugins: [rehypeBaseLinks] },
});
