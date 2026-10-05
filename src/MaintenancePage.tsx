import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  MapPin,
  Navigation,
} from 'lucide-react';
import logoYellow from '../assets/Logo Masterfile/joydimsum-primary-yellow--rgb.svg';
import logoContainerOutlineAccent from '../assets/Logo Masterfile/joydimsum-container-outline-accent--rgb.svg';
import siewMai from './assets/seo/joy-dim-sum-siew-mai-kuala-lumpur.webp';
import harKau from './assets/seo/joy-dim-sum-har-kau-kuala-lumpur.webp';
import chickenPau from './assets/seo/joy-dim-sum-chicken-pau-kuala-lumpur.webp';
import gulaMelakaMantau from './assets/seo/joy-dim-sum-gula-melaka-mantau-kuala-lumpur.webp';
import { kiaraBayMapsUrl } from './lib/siteData';
import { FacebookIcon, InstagramIcon } from './lib/SocialIcons';

const outlets = [
  {
    name: 'Kiara Bay',
    addressLines: [
      'G-27, Karya Bayu Metropolitan,',
      '51, Persiaran Putra Bayu, Kiara Bay, Kepong,',
      '52100 Kuala Lumpur',
    ],
    description: 'Dim sum, pau and casual dining at Kiara Bay in Kepong, Kuala Lumpur.',
    hours: 'Monday–Sunday, 8am to 11pm',
    mapsLink: kiaraBayMapsUrl,
  },
] as const;

const stickers = [
  {
    image: siewMai,
    alt: 'Siew mai dim sum sticker',
    width: 1184,
    height: 1070,
    className: 'joy-maintenance__sticker--siew-mai',
  },
  {
    image: harKau,
    alt: 'Har kau dim sum sticker',
    width: 1210,
    height: 1084,
    className: 'joy-maintenance__sticker--har-kau',
  },
  {
    image: chickenPau,
    alt: 'Chicken pau sticker',
    width: 1067,
    height: 908,
    className: 'joy-maintenance__sticker--chicken-pau',
  },
  {
    image: gulaMelakaMantau,
    alt: 'Gula Melaka mantau sticker',
    width: 996,
    height: 848,
    className: 'joy-maintenance__sticker--mantau',
  },
] as const;

export default function MaintenancePage() {
  const heroSectionRef = useRef<HTMLElement>(null);
  const [dragEnabled, setDragEnabled] = useState(false);

  useEffect(() => {
    const dragMedia = window.matchMedia(
      '(min-width: 981px) and (hover: hover) and (pointer: fine)',
    );
    const updateDragSupport = () => setDragEnabled(dragMedia.matches);

    updateDragSupport();
    dragMedia.addEventListener('change', updateDragSupport);

    return () => dragMedia.removeEventListener('change', updateDragSupport);
  }, []);

  return (
    <div className="joy-maintenance">
      <div className="joy-maintenance__pattern" aria-hidden="true" />

      <header className="joy-maintenance__header joy-section-shell">
        <img
          src={logoYellow}
          alt="JOY Dim Sum"
          width="1080"
          height="190"
        />
      </header>

      <main>
        <section
          className="joy-maintenance__hero joy-section-shell"
          aria-labelledby="maintenance-title"
          ref={heroSectionRef}
        >
          <div className="joy-maintenance__intro">
            <p className="joy-maintenance__kicker">Dim sum in Kiara Bay, Kepong</p>
            <h1 id="maintenance-title">
              <span className="joy-maintenance__headline-line">Wait ah,</span>
              <span className="joy-maintenance__headline-line">something is</span>
              <span className="joy-maintenance__headline-line">
                steaming<span className="joy-maintenance__bang">!</span>
              </span>
            </h1>
            <p className="joy-maintenance__support">
              We’re freshening up the JOY Dim Sum website. Kiara Bay is serving
              every day from 8am to 11pm.
            </p>
            <a className="joy-maintenance__outlet-cta" href="#maintenance-outlets">
              Find our outlets
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div
            className="joy-maintenance__playground"
            data-drag-enabled={dragEnabled ? 'true' : 'false'}
          >
            <p className="joy-maintenance__drag-note">Drag a basket while you wait</p>
            {stickers.map((sticker) => {
              const image = (
                <img
                  src={sticker.image}
                  alt={sticker.alt}
                  width={sticker.width}
                  height={sticker.height}
                  draggable="false"
                />
              );
              const className = `joy-maintenance__sticker ${sticker.className}`;

              // Where dragging is off (touch and coarse pointers, so vertical
              // scrolling always wins) the sticker is decoration, not a control.
              // Rendering a button there put a focusable "Move the ..." target in
              // the tab order that could not do anything.
              if (!dragEnabled) {
                return (
                  <div key={sticker.alt} className={className}>
                    {image}
                  </div>
                );
              }

              return (
                <motion.button
                  key={sticker.alt}
                  type="button"
                  className={className}
                  drag
                  dragConstraints={heroSectionRef}
                  dragElastic={0}
                  dragMomentum={false}
                  whileDrag={{ scale: 1.08, zIndex: 10 }}
                  aria-label={`Move the ${sticker.alt.toLowerCase()}`}
                >
                  {image}
                </motion.button>
              );
            })}
          </div>
        </section>

        <section
          id="maintenance-outlets"
          className="joy-maintenance__outlets"
          aria-labelledby="maintenance-outlets-title"
        >
          <div className="joy-section-shell">
            <div className="joy-maintenance__outlet-heading">
              <p className="joy-maintenance__kicker">Find our outlets</p>
              <h2 id="maintenance-outlets-title">Find your table</h2>
            </div>

            <div className="joy-locations__grid joy-maintenance__outlet-grid">
              {outlets.map((outlet) => (
                <article
                  key={outlet.name}
                  className="joy-outlet-card"
                >
                  <h3>{outlet.name}</h3>
                  <p className="joy-outlet-card__description">
                    <span>{outlet.description}</span>
                  </p>

                  <div className="joy-outlet-card__details">
                    <a
                      className="joy-outlet-card__map-link"
                      href={outlet.mapsLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${outlet.name} in Google Maps`}
                    >
                      <MapPin aria-hidden="true" />
                      <span className="joy-outlet-card__address">
                        {outlet.addressLines.map((line) => (
                          <span key={line}>{line}</span>
                        ))}
                      </span>
                    </a>
                    <p>
                      <Clock aria-hidden="true" />
                      <span>{outlet.hours}</span>
                    </p>
                  </div>

                  <div className="joy-outlet-card__footer">
                    <a
                      className="joy-outlet-card__button"
                      href={outlet.mapsLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Navigation aria-hidden="true" size={18} />
                      Get directions
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="joy-maintenance__footer">
        <div className="joy-section-shell joy-maintenance__footer-inner">
          <img
            src={logoContainerOutlineAccent}
            alt="JOY Dim Sum"
            width="1080"
            height="412"
          />
          <nav className="joy-maintenance__social" aria-label="JOY Dim Sum social media">
            <a href="https://www.instagram.com/joydimsum.my/" target="_blank" rel="noreferrer">
              <InstagramIcon />
              <span>Instagram</span>
            </a>
            <a href="https://www.facebook.com/joydimsum.my/" target="_blank" rel="noreferrer">
              <FacebookIcon />
              <span>Facebook</span>
            </a>
          </nav>
          <p suppressHydrationWarning>© {new Date().getFullYear()} JOY Dim Sum. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
