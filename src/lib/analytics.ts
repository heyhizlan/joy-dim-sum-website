declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type ConversionEvent =
  | 'get_directions_click'
  | 'whatsapp_click'
  | 'menu_page_view';

export function trackConversion(
  eventName: ConversionEvent,
  parameters: Record<string, string> = {},
) {
  if (typeof window === 'undefined') return;

  window.gtag?.('event', eventName, parameters);
}
