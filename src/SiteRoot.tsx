import { useEffect, useState } from 'react';
import App from './App';
import MaintenancePage from './MaintenancePage';
import { MAINTENANCE_MODE } from './siteMode';

export default function SiteRoot() {
  const [showMaintenance, setShowMaintenance] = useState(MAINTENANCE_MODE);

  useEffect(() => {
    const isLandingPreview =
      new URLSearchParams(window.location.search).get('preview') === 'landing';

    setShowMaintenance(MAINTENANCE_MODE && !isLandingPreview);
  }, []);

  return showMaintenance ? <MaintenancePage /> : <App />;
}
