import { useEffect, useState } from 'react';

// Single source of truth for the Kiara Bay opening; it was previously duplicated
// between Locations and MaintenancePage.
export const KIARA_BAY_OPENING_DATE = new Date('2026-09-16T00:00:00+08:00');
export const KIARA_BAY_OPENING_LABEL = 'Target opening 16 September 2026';

const openingTime = KIARA_BAY_OPENING_DATE.getTime();

export function getOpeningCountdown() {
  const difference = openingTime - Date.now();

  if (difference <= 0) return 'Opening day is here';

  const days = Math.floor(difference / 86_400_000);
  const hours = Math.floor((difference / 3_600_000) % 24);
  const minutes = Math.floor((difference / 60_000) % 60);

  return `${days}d ${hours}h ${minutes}m`;
}

export function KiaraBayCountdown() {
  const [countdown, setCountdown] = useState('Counting down…');

  useEffect(() => {
    const updateCountdown = () => setCountdown(getOpeningCountdown());

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 60_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="joy-outlet-card__countdown" aria-live="polite">
      <span>Opening in</span>
      <strong>{countdown}</strong>
    </div>
  );
}
