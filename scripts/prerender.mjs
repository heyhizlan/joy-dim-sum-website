import { readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const distDir = path.join(projectRoot, 'dist');
const serverDirectory = path.join(distDir, 'server');

async function findEntryServer(startDir) {
  try {
    const files = await readdir(startDir, { recursive: true });
    console.log(
      `[prerender] Files in ${path.relative(projectRoot, startDir)}:`,
      files
    );
    const match = files.find(
      (f) => path.basename(f).startsWith('entry-server') && f.endsWith('.js')
    );
    return match ? { file: match, baseDir: startDir } : null;
  } catch (err) {
    console.log(
      `[prerender] Could not read ${startDir}: ${err.message}`
    );
    return null;
  }
}

// 1. Look in dist/server (normal case)
let found = await findEntryServer(serverDirectory);

// 2. Fallback: look anywhere in dist (when wrangler moves things)
if (!found) {
  console.log('[prerender] Not found in dist/server, scanning dist/...');
  found = await findEntryServer(distDir);
}

if (!found) {
  throw new Error(
    `Could not find an entry-server .js bundle in ${serverDirectory} or ${distDir}`
  );
}

const serverEntryPath = path.join(found.baseDir, found.file);
console.log('[prerender] Loading SSR bundle from:', serverEntryPath);

const indexPath = path.join(distDir, 'index.html');
const template = await readFile(indexPath, 'utf8');

if (!template.includes('<div id="root"></div>')) {
  throw new Error(`Could not find the empty React root in ${indexPath}`);
}

const { render, MAINTENANCE_MODE } = await import(
  pathToFileURL(serverEntryPath).href
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
console.log('[prerender] Done. index.html prerendered.');
