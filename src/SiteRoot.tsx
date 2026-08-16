import { useState } from 'react';
import App from './App';
import MaintenancePage from './MaintenancePage';
import { MAINTENANCE_MODE } from './siteMode';

function isLandingPreview() {
  return (
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('preview') === 'landing'
  );
}

export default function SiteRoot() {
  // Resolve the preview override in the initial state so ?preview=landing
  // renders the landing page immediately instead of flashing maintenance first.
  const [showMaintenance] = useState(
    () => MAINTENANCE_MODE && !isLandingPreview(),
  );

  return showMaintenance ? <MaintenancePage /> : <App />;
}
