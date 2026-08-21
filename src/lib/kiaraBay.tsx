import { useEffect, useState } from 'react';
import { KIARA_BAY_OPENING_ISO } from './siteData';

// Single source of truth for the Kiara Bay opening; it was previously duplicated
// between Locations and MaintenancePage.
export { KIARA_BAY_OPENING_LABEL } from './siteData';

export const KIARA_BAY_OPENING_DATE = new Date(
  `${KIARA_BAY_OPENING_ISO}T00:00:00+08:00`,
);

const openingTime = KIARA_BAY_OPENING_DATE.getTime();

export function getOpeningCountdown() {
  const difference = openingTime - Date.now();

  if (difference <= 0) return 'Opening day is here';

  const days = Math.floor(difference / 86_400_000);
  const hours = Math.floor((difference / 3_600_000) % 24);
  const minutes = Math.floor((difference / 60_000) % 60);

  return `${days}d ${hours}h ${minutes}m`;
}

function useOpeningCountdown() {
  const [countdown, setCountdown] = useState('Counting down…');

  useEffect(() => {
    const updateCountdown = () => setCountdown(getOpeningCountdown());

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 60_000);

    return () => window.clearInterval(interval);
  }, []);

  return countdown;
}

export function KiaraBayCountdown() {
  const countdown = useOpeningCountdown();

  return (
    // No aria-live: this ticks every 60s, so an assertive region would
    // interrupt the reader once a minute. The exact date is stated alongside.
    <div className="joy-outlet-card__countdown">
      <span>Opening in</span>
      <strong>{countdown}</strong>
    </div>
  );
}

export function KiaraBayCountdownHeadline() {
  const countdown = useOpeningCountdown();

  return (
    <>
      Opening in <span>{countdown}</span>
    </>
  );
}
