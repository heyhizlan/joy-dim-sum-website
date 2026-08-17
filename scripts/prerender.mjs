import { readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const indexPath = new URL('../dist/index.html', import.meta.url);
const serverDirectory = path.join(projectRoot, 'dist', 'server');

const template = await readFile(indexPath, 'utf8');

if (!template.includes('<div id="root"></div>')) {
  throw new Error(
    `Could not find the empty React root in ${path.join(projectRoot, 'dist', 'index.html')}`,
  );
}

const serverFiles = await readdir(serverDirectory);

const entryFile = serverFiles.find(
  (file) => /^entry-server-.*\.js$/.test(file),
);

if (!entryFile) {
  throw new Error(
    `Could not find an entry-server bundle in ${serverDirectory}`,
  );
}

const serverBundleUrl = pathToFileURL(
  path.join(serverDirectory, entryFile),
).href;

const { render, MAINTENANCE_MODE } = await import(serverBundleUrl);

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
