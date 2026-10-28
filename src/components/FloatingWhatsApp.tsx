import { WhatsAppIcon } from '../lib/SocialIcons';
import { trackConversion } from '../lib/analytics';
import { outlets } from '../lib/siteData';

export default function FloatingWhatsApp() {
  const outlet = outlets.kiaraBay;

  return (
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
  );
}
