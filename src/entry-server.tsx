import { renderToString } from 'react-dom/server';
import SiteRoot from './SiteRoot';

import { getRouteMeta, getStructuredData, prerenderRoutes } from './lib/seo';
export { MAINTENANCE_MODE } from './siteMode';

export { prerenderRoutes };

export function render(pathname = '/') {
  return {
    appHtml: renderToString(<SiteRoot pathname={pathname} />),
    metadata: getRouteMeta(pathname),
    structuredData: getStructuredData(pathname),
  };
}
