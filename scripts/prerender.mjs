import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const indexPath = new URL('../dist/index.html', import.meta.url);
const serverBundlePath = new URL('../dist/server/entry-server.js', import.meta.url);
const serverOutputPath = new URL('../dist/server/', import.meta.url);

const template = await readFile(indexPath, 'utf8');
const { render, MAINTENANCE_MODE } = await import(serverBundlePath.href);
const appHtml = render();

if (!template.includes('<div id="root"></div>')) {
  throw new Error(`Could not find the empty React root in ${projectRoot}dist/index.html`);
}

// Maintenance pages must stay out of the index; the live site should be crawled.
const robotsDirective = MAINTENANCE_MODE
  ? 'noindex, nofollow'
  : 'index, follow, max-image-preview:large';

const prerendered = template
  .replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  )
  .replace('__ROBOTS_DIRECTIVE__', robotsDirective);

await writeFile(indexPath, prerendered);
await rm(serverOutputPath, { recursive: true, force: true });
