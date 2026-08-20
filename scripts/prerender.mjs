import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const distDir = path.join(projectRoot, 'dist');
const serverDirectory = path.join(distDir, 'server');
const siteUrl = 'https://joydimsum.com';

async function findEntryServer(startDirectory) {
  try {
    const files = await readdir(startDirectory, { recursive: true });
    const match = files.find(
      (file) =>
        path.basename(file).startsWith('entry-server') && file.endsWith('.js'),
    );
    return match ? path.join(startDirectory, match) : null;
  } catch {
    return null;
  }
}

const serverEntryPath =
  (await findEntryServer(serverDirectory)) ??
  (await findEntryServer(distDir));

if (!serverEntryPath) {
  throw new Error('Could not find the built entry-server JavaScript bundle.');
}

const serverModule = await import(pathToFileURL(serverEntryPath).href);
const {
  render,
  prerenderRoutes,
  MAINTENANCE_MODE,
} = serverModule;

if (typeof render !== 'function' || !Array.isArray(prerenderRoutes)) {
  throw new Error('The server bundle is missing render() or prerenderRoutes.');
}

const indexPath = path.join(distDir, 'index.html');
const template = await readFile(indexPath, 'utf8');

if (!template.includes('<div id="root"></div>')) {
  throw new Error('The built HTML template does not contain an empty React root.');
}

function escapeAttribute(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replaceMeta(html, kind, key, value) {
  const pattern = new RegExp(
    `(<meta\\s+${kind}="${escapeRegExp(key)}"\\s+content=")[^"]*("\\s*\\/?>)`,
  );
  if (!pattern.test(html)) {
    throw new Error(`Missing ${kind}="${key}" meta tag in HTML template.`);
  }
  return html.replace(pattern, `$1${escapeAttribute(value)}$2`);
}

function renderDocument(pathname) {
  const { appHtml, metadata, structuredData } = render(pathname);
  const robotsDirective = MAINTENANCE_MODE
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large';

  let html = template
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace('__ROBOTS_DIRECTIVE__', robotsDirective)
    .replace(
      /<title>[\s\S]*?<\/title>/,
      `<title>${escapeAttribute(metadata.title)}</title>`,
    )
    .replace(
      /(<link\s+rel="canonical"\s+href=")[^"]*("\s*\/>)/,
      `$1${escapeAttribute(metadata.canonical)}$2`,
    );

  html = replaceMeta(html, 'name', 'description', metadata.description);
  html = replaceMeta(html, 'property', 'og:url', metadata.canonical);
  html = replaceMeta(html, 'property', 'og:title', metadata.title);
  html = replaceMeta(html, 'property', 'og:description', metadata.description);
  html = replaceMeta(html, 'property', 'og:image', metadata.ogImage);
  html = replaceMeta(html, 'property', 'og:image:secure_url', metadata.ogImage);
  html = replaceMeta(html, 'property', 'og:image:alt', metadata.ogImageAlt);
  html = replaceMeta(html, 'name', 'twitter:title', metadata.title);
  html = replaceMeta(html, 'name', 'twitter:description', metadata.description);
  html = replaceMeta(html, 'name', 'twitter:image', metadata.ogImage);
  html = replaceMeta(html, 'name', 'twitter:image:alt', metadata.ogImageAlt);

  const safeStructuredData = JSON.stringify(structuredData, null, 2).replaceAll(
    '<',
    '\\u003c',
  );
  html = html.replace(
    /<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script id="structured-data" type="application/ld+json">\n${safeStructuredData}\n    </script>`,
  );

  return html;
}

const routes = MAINTENANCE_MODE ? ['/'] : prerenderRoutes;

for (const route of routes) {
  const outputDirectory =
    route === '/'
      ? distDir
      : path.join(distDir, ...route.split('/').filter(Boolean));

  await mkdir(outputDirectory, { recursive: true });
  await writeFile(
    path.join(outputDirectory, 'index.html'),
    renderDocument(route),
    'utf8',
  );
}

const robotsTxt = MAINTENANCE_MODE
  ? 'User-agent: *\nDisallow: /\n'
  : `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
await writeFile(path.join(distDir, 'robots.txt'), robotsTxt, 'utf8');

const lastmod = new Date().toISOString().slice(0, 10);
const sitemapRoutes = MAINTENANCE_MODE ? ['/'] : prerenderRoutes;
const sitemapEntries = sitemapRoutes
  .map(
    (route) =>
      `  <url>\n    <loc>${siteUrl}${route}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
  )
  .join('\n');

await writeFile(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`,
  'utf8',
);

await rm(serverDirectory, { recursive: true, force: true });

console.log(
  `[prerender] Generated ${routes.length} route${routes.length === 1 ? '' : 's'}, robots.txt and sitemap.xml (${MAINTENANCE_MODE ? 'maintenance' : 'indexable'} mode).`,
);
