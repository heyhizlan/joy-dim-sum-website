import { useState } from 'react';
import './multipage.css';
import { normalizePathname } from './lib/seo';
import { outlets } from './lib/siteData';
import LandingPage from './pages/LandingPage';
import FaqPage from './pages/FaqPage';
import LocationsIndexPage from './pages/LocationsIndexPage';
import MenuPage from './pages/MenuPage';
import NotFoundPage from './pages/NotFoundPage';
import OutletPage from './pages/OutletPage';
import MaintenancePage from './MaintenancePage';
import { MAINTENANCE_MODE } from './siteMode';

// ?preview=landing and ?preview=maintenance force either page regardless of the
// build-time flag, so both can be reviewed whichever way MAINTENANCE_MODE is set.
function previewOverride() {
  if (typeof window === 'undefined') return null;

  const preview = new URLSearchParams(window.location.search).get('preview');
  if (preview === 'landing') return false;
  if (preview === 'maintenance') return true;

  return null;
}

export default function SiteRoot({
  pathname,
}: {
  pathname?: string;
}) {
  // Resolve the preview override in the initial state so ?preview=landing
  // renders the landing page immediately instead of flashing maintenance first.
  const [showMaintenance] = useState(() => previewOverride() ?? MAINTENANCE_MODE);

  if (showMaintenance) return <MaintenancePage />;

  const browserPath =
    typeof window === 'undefined' ? '/' : window.location.pathname;
  const routePath = normalizePathname(pathname ?? browserPath);

  switch (routePath) {
    case '/':
      return <LandingPage />;
    case '/locations/':
      return <LocationsIndexPage />;
    case '/locations/sentul-point/':
      return <OutletPage outlet={outlets.sentul} />;
    case '/locations/kiara-bay-kepong/':
      return <OutletPage outlet={outlets.kiaraBay} />;
    case '/menu/':
      return <MenuPage />;
    case '/faqs/':
      return <FaqPage />;
    default:
      return <NotFoundPage />;
  }
}
