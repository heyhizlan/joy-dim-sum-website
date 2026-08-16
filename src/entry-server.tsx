import { renderToString } from 'react-dom/server';
import SiteRoot from './SiteRoot';

export function render() {
  return renderToString(<SiteRoot />);
}
