declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type ConversionEvent =
  | 'get_directions_click'
  | 'whatsapp_click'
  | 'menu_page_view'
  | 'careers_apply_click';

/**
 * Sends a conversion event straight to GA4 (G-N644GDSP1K, property
 * 550830226) via the gtag.js snippet in index.html.
 *
 * GA4 is tagged directly, not through Google Tag Manager. Do not also add a
 * GA4 tag inside GTM-W9XQJS82, or every visit and event is counted twice.
 */
export function trackConversion(
  eventName: ConversionEvent,
  parameters: Record<string, string> = {},
) {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', eventName, parameters);
}
