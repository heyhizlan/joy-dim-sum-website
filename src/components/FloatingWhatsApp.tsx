import { MapPin } from 'lucide-react';
import { WhatsAppIcon } from '../lib/SocialIcons';
import { trackConversion } from '../lib/analytics';
import { outlets } from '../lib/siteData';

export default function FloatingWhatsApp() {
  const outlet = outlets.kiaraBay;

  return (
    <div className="joy-floating-actions" aria-label="Quick contact options">
      <a
        className="joy-floating-map"
        href={outlet.mapsUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Open JOY Dim Sum Kiara Bay in Google Maps"
        onClick={() =>
          trackConversion('get_directions_click', {
            link_url: outlet.mapsUrl,
            link_text: 'Floating Google Maps',
          })
        }
      >
        <MapPin aria-hidden="true" />
      </a>
      <a
        className="joy-floating-whatsapp"
        href={outlet.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`WhatsApp JOY Dim Sum at ${outlet.phone}`}
        onClick={() =>
          trackConversion('whatsapp_click', {
            link_url: outlet.whatsappUrl,
            link_text: 'Floating WhatsApp',
          })
        }
      >
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
