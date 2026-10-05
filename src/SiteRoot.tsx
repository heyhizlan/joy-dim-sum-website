import { useEffect, useState } from 'react';
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

function FullMenuRedirect() {
  useEffect(() => {
    window.location.replace('/menu/#full-text-menu');
  }, []);

  return (
    <main className="min-h-screen bg-joy-green" aria-labelledby="menu-moved-title">
      <div className="joy-section-shell joy-page-hero__copy">
        <h1 id="menu-moved-title">The full menu has moved</h1>
        <p>
          <a className="joy-button joy-button--primary" href="/menu/#full-text-menu">
            View the JOY Dim Sum menu
          </a>
        </p>
      </div>
    </main>
  );
}

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
    case '/locations/kiara-bay-kepong/':
      return <OutletPage outlet={outlets.kiaraBay} />;
    case '/menu/':
      return <MenuPage />;
    case '/full-menu/':
      return <FullMenuRedirect />;
    case '/faqs/':
      return <FaqPage />;
    default:
      return <NotFoundPage />;
  }
}
