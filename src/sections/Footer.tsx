import { CalendarDays, MapPin } from 'lucide-react';
import footerHeart from '../assets/seo/joy-dim-sum-yellow-half-heart-footer.svg';
import logoYellow from '../../assets/Logo Masterfile/joydimsum-primary-yellow--rgb.svg';

const footerNavigation = [
  { label: 'Menu', href: '#menu' },
  { label: 'Outlets', href: '#locations' },
  { label: 'Our Story', href: '#about' },
  { label: 'News', href: '#instagram' },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.5 8.5V6.8c0-.8.5-1 1-1h2.4V2.1L14.6 2C11.3 2 10 4 10 6.5v2H7v4.1h3V22h4.5v-9.4h3.1l.5-4.1h-3.6Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.84 9.84 0 0 0-8.43 14.91L2 22l5.24-1.56A9.94 9.94 0 1 0 12.04 2Zm0 17.88a8 8 0 0 1-4.08-1.12l-.29-.17-3.11.92.94-3.03-.19-.31A7.96 7.96 0 1 1 12.04 19.88Zm4.37-5.96c-.24-.12-1.41-.7-1.63-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.41-.58 1.61-1.13.2-.56.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="joy-footer">
      <img
        className="joy-footer__heart"
        src={footerHeart}
        alt=""
        width="1167"
        height="567"
        aria-hidden="true"
      />

      <div className="joy-section-shell joy-footer__content">
        <div className="joy-footer__grid">
          <div className="joy-footer__brand">
            <a className="joy-footer__brand-logo" href="#top" aria-label="Back to JOY Dim Sum home">
              <img
                src={logoYellow}
                alt="JOY Dim Sum Sentul Point and Kiara Bay, Kepong"
                width="1080"
                height="190"
              />
            </a>
            <p>
              Dim sum, pau and more in Sentul and Kepong, Kuala Lumpur. Come
              hungry, bring your makan gang and stay a bit longer, lah.
            </p>
          </div>

          <div className="joy-footer__right">
            <nav className="joy-footer__navigation" aria-label="Footer navigation">
              <h3>Explore</h3>
              {footerNavigation.map((link) => (
                <a key={link.href} className="joy-footer__detail" href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="joy-footer__outlets">
              <div>
                <h3>Sentul</h3>
                <a
                  className="joy-footer__detail joy-footer__location"
                  href="https://www.google.com/maps/search/?api=1&query=JOY+Dim+Sum+Sentul+Point"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open JOY Dim Sum Sentul Point in Google Maps"
                >
                  <MapPin aria-hidden="true" />
                  <span>Sentul Point, Kuala Lumpur</span>
                </a>
                <a
                  className="joy-footer__detail joy-footer__social"
                  href="https://wa.me/60166102688"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp JOY Dim Sum at 016-610 2688"
                >
                  <WhatsAppIcon />
                  <span>016-610 2688</span>
                </a>
              </div>

              <div>
                <h3>Kiara Bay</h3>
                <a
                  className="joy-footer__detail joy-footer__location"
                  href="https://www.google.com/maps/search/?api=1&query=JOY+Dim+Sum+Kiara+Bay+Kepong"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open JOY Dim Sum Kiara Bay in Google Maps"
                >
                  <MapPin aria-hidden="true" />
                  <span>Kiara Bay, Kepong</span>
                </a>
                <p className="joy-footer__detail">
                  <CalendarDays aria-hidden="true" />
                  <span>Target opening 15 September 2026</span>
                </p>
              </div>
            </div>

            <div>
              <h3>Social media</h3>
              <a
                className="joy-footer__detail joy-footer__social"
                href="https://www.facebook.com/joydimsum.my/"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
                <span>@joydimsum.my</span>
              </a>
              <a
                className="joy-footer__detail joy-footer__social"
                href="https://www.instagram.com/joydimsum.my/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
                <span>@joydimsum.my</span>
              </a>
            </div>
          </div>
        </div>

        <div className="joy-footer__bottom">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} <a href="https://joydimsum.com/">JOY Dim Sum</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
