import { readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const indexPath = path.join(projectRoot, 'dist', 'index.html');
const serverDirectory = path.join(projectRoot, 'dist', 'server');
const serverEntryPath = path.join(serverDirectory, 'entry-server.js');

const template = await readFile(indexPath, 'utf8');

if (!template.includes('<div id="root"></div>')) {
  throw new Error(
    `Could not find the empty React root in ${indexPath}`,
  );
}

const { render, MAINTENANCE_MODE } = await import(
  pathToFileURL(serverEntryPath).href,
);

if (typeof render !== 'function') {
  throw new Error('The server entry bundle does not export a render function.');
}

const appHtml = render();

const robotsDirective = MAINTENANCE_MODE
  ? 'noindex, nofollow'
  : 'index, follow, max-image-preview:large';

const prerendered = template
  .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  .replace('__ROBOTS_DIRECTIVE__', robotsDirective);

await writeFile(indexPath, prerendered, 'utf8');
await rm(serverDirectory, { recursive: true, force: true });
