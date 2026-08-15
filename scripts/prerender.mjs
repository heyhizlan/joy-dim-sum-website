import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const indexPath = new URL('../dist/index.html', import.meta.url);
const serverBundlePath = new URL('../dist/server/entry-server.js', import.meta.url);
const serverOutputPath = new URL('../dist/server/', import.meta.url);

const template = await readFile(indexPath, 'utf8');
const { render } = await import(serverBundlePath.href);
const appHtml = render();

if (!template.includes('<div id="root"></div>')) {
  throw new Error(`Could not find the empty React root in ${projectRoot}dist/index.html`);
}

const prerendered = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`,
);

await writeFile(indexPath, prerendered);
await rm(serverOutputPath, { recursive: true, force: true });
