declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export type ConversionEvent =
  | 'get_directions_click'
  | 'whatsapp_click'
  | 'menu_page_view';

/**
 * Pushes a conversion event into the Google Tag Manager data layer
 * (container GTM-W9XQJS82). GTM forwards it to GA4 via a Custom Event
 * trigger matching the event name.
 */
export function trackConversion(
  eventName: ConversionEvent,
  parameters: Record<string, string> = {},
) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...parameters });
}
