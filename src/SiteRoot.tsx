import { useState } from 'react';
import App from './App';
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

export default function SiteRoot() {
  // Resolve the preview override in the initial state so ?preview=landing
  // renders the landing page immediately instead of flashing maintenance first.
  const [showMaintenance] = useState(() => previewOverride() ?? MAINTENANCE_MODE);

  return showMaintenance ? <MaintenancePage /> : <App />;
}
