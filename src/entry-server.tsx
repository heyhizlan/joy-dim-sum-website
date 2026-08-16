import { renderToString } from 'react-dom/server';
import SiteRoot from './SiteRoot';

export { MAINTENANCE_MODE } from './siteMode';

export function render() {
  return renderToString(<SiteRoot />);
}
