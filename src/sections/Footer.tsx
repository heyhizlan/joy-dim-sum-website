import { CalendarDays, MapPin } from 'lucide-react';
import footerHeart from '../assets/seo/joy-dim-sum-yellow-half-heart-footer.svg';
import logoYellow from '../../assets/Logo Masterfile/joydimsum-primary-yellow--rgb.svg';

const footerNavigation = [
  { label: 'Menu', href: '#menu' },
  { label: 'Outlets', href: '#locations' },
  { label: 'Story', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Reviews', href: '#reviews' },
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
              Dim sum, pau and more in Sentul and Kepong, Klang Valley. Come
              hungry and stay a little longer.
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
          <p>&copy; {new Date().getFullYear()} JOY Dim Sum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
