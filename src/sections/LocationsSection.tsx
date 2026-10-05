import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Clock, MapPin, Navigation as NavigationIcon } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import storefrontOne from '../../assets/kiarabay-gallery/joy-dim-sum-kiara-bay-kepong-storefront-1.webp';
import storefrontTwo from '../../assets/kiarabay-gallery/joy-dim-sum-kiara-bay-kepong-storefront-2.webp';
import interior from '../../assets/kiarabay-gallery/joy-dim-sum-kiara-bay-kepong-interior.webp';
import signage from '../../assets/kiarabay-gallery/joy-dim-sum-kiara-bay-kepong-signage.webp';
import { outlets } from '../lib/siteData';

const galleryImages = [
  {
    src: storefrontOne,
    alt: 'JOY Dim Sum Kiara Bay storefront at Karya Bayu Metropolitan in Kepong',
  },
  {
    src: storefrontTwo,
    alt: 'Entrance to JOY Dim Sum Kiara Bay dim sum and dumpling restaurant',
  },
  {
    src: interior,
    alt: 'Dining interior at JOY Dim Sum Kiara Bay in Kepong',
  },
  {
    src: signage,
    alt: 'JOY Dim Sum Kiara Bay restaurant signage',
  },
] as const;

export default function LocationsSection({ page = false }: { page?: boolean }) {
  const headingRef = useRef(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const isInView = useInView(headingRef, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();
  const Heading = page ? 'h1' : 'h2';
  const outlet = outlets.kiaraBay;

  const showSlide = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    carousel.scrollTo({ left: carousel.clientWidth * index, behavior });
    setActiveSlide(index);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;

    const interval = window.setInterval(() => {
      const nextSlide = (activeSlide + 1) % galleryImages.length;
      showSlide(nextSlide);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [activeSlide, paused, reduceMotion, showSlide]);

  return (
    <section
      id="locations"
      className={`joy-locations${page ? ' joy-locations--page' : ''}`}
      aria-labelledby="locations-title"
    >
      <div className="joy-locations__pattern" aria-hidden="true" />
      <div className="joy-section-shell joy-locations__content">
        {page && (
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Outlet' }]} />
        )}

        <motion.div
          ref={headingRef}
          className="joy-locations__heading"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="joy-section-kicker">Find our outlet</p>
          <Heading id="locations-title">
            {page ? 'JOY Dim Sum at Kiara Bay, Kepong' : 'One Outlet, Full JOY'}
          </Heading>
          {page && (
            <p className="joy-locations__intro">
              Find our Kiara Bay address, daily opening hours, photo carousel and
              directions for your next dim sum and dumpling feast.
            </p>
          )}
        </motion.div>

        <div className="joy-locations__grid joy-locations__grid--single">
          <motion.article
            className="joy-outlet-card joy-outlet-card--with-carousel"
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="joy-outlet-carousel"
              aria-label="Kiara Bay outlet image carousel"
              onPointerDown={() => setPaused(true)}
              onPointerUp={() => setPaused(false)}
              onPointerCancel={() => setPaused(false)}
              onPointerLeave={() => setPaused(false)}
            >
              <div
                ref={carouselRef}
                className="joy-outlet-carousel__track"
                onScroll={(event) => {
                  const track = event.currentTarget;
                  if (!track.clientWidth) return;
                  setActiveSlide(
                    Math.min(
                      galleryImages.length - 1,
                      Math.max(0, Math.round(track.scrollLeft / track.clientWidth)),
                    ),
                  );
                }}
              >
                {galleryImages.map((image, index) => (
                  <figure className="joy-outlet-carousel__slide" key={image.src}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      width="1800"
                      height="1800"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </figure>
                ))}
              </div>
              <div className="joy-outlet-carousel__dots" aria-label="Choose an outlet photo">
                {galleryImages.map((image, index) => (
                  <button
                    key={image.src}
                    type="button"
                    className={index === activeSlide ? 'is-active' : ''}
                    aria-label={`Show outlet photo ${index + 1} of ${galleryImages.length}`}
                    aria-current={index === activeSlide ? 'true' : undefined}
                    onClick={() => showSlide(index)}
                  />
                ))}
              </div>
            </div>

            <div className="joy-outlet-card__copy">
              <h3>
                <a href={outlet.path}>{outlet.shortName}</a>
              </h3>
              <p className="joy-outlet-card__description">{outlet.description}</p>

              <div className="joy-outlet-card__details">
                <a
                  className="joy-outlet-card__map-link"
                  href={outlet.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${outlet.schemaName} in Google Maps`}
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
                  <span>{outlet.hoursLabel}</span>
                </p>
              </div>

              <div className="joy-outlet-card__footer joy-outlet-card__footer--overview">
                <a
                  className="joy-outlet-card__button"
                  href={page ? outlet.path : outlet.mapsUrl}
                  target={page ? undefined : '_blank'}
                  rel={page ? undefined : 'noreferrer'}
                >
                  {page ? (
                    <MapPin aria-hidden="true" size={17} />
                  ) : (
                    <NavigationIcon aria-hidden="true" size={17} />
                  )}
                  {page ? 'View Outlet' : 'Get Directions'}
                </a>
              </div>
            </div>
          </motion.article>
        </div>
        {!page && (
          <div className="joy-locations__all-link">
            <a className="joy-button joy-button--green" href="/locations/kiara-bay-kepong/">
              View Outlet
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
