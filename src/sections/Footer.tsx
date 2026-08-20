import { CalendarDays, MapPin } from 'lucide-react';
import footerHeart from '../assets/seo/joy-dim-sum-yellow-half-heart-footer.svg';
import logoYellow from '../../assets/Logo Masterfile/joydimsum-primary-yellow--rgb.svg';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from '../lib/SocialIcons';
import { outlets, socialLinks } from '../lib/siteData';

const footerNavigation = [
  { label: 'Menu', href: '/menu/' },
  { label: 'Outlets', href: '/locations/' },
  { label: 'Story', href: '/#about' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'News', href: '/#instagram' },
];

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
            <a className="joy-footer__brand-logo" href="/" aria-label="Back to JOY Dim Sum home">
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
                <h3><a href={outlets.sentul.path}>Sentul</a></h3>
                <a
                  className="joy-footer__detail joy-footer__location"
                  href={outlets.sentul.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${outlets.sentul.schemaName} in Google Maps`}
                >
                  <MapPin aria-hidden="true" />
                  <span>{outlets.sentul.shortName}, Kuala Lumpur</span>
                </a>
                <a
                  className="joy-footer__detail joy-footer__social"
                  href={outlets.sentul.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`WhatsApp JOY Dim Sum at ${outlets.sentul.phone}`}
                >
                  <WhatsAppIcon />
                  <span>{outlets.sentul.phone}</span>
                </a>
              </div>

              <div>
                <h3><a href={outlets.kiaraBay.path}>Kiara Bay</a></h3>
                <a
                  className="joy-footer__detail joy-footer__location"
                  href={outlets.kiaraBay.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${outlets.kiaraBay.schemaName} in Google Maps`}
                >
                  <MapPin aria-hidden="true" />
                  <span>{outlets.kiaraBay.shortName}, Kepong</span>
                </a>
                <p className="joy-footer__detail">
                  <CalendarDays aria-hidden="true" />
                  <span>{outlets.kiaraBay.openingLabel}</span>
                </p>
              </div>
            </div>

            <div>
              <h3>Social media</h3>
              <a
                className="joy-footer__detail joy-footer__social"
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
                <span>@joydimsum.my</span>
              </a>
              <a
                className="joy-footer__detail joy-footer__social"
                href={socialLinks.instagram}
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
