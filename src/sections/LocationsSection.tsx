import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  CalendarDays,
  Clock,
  MapPin,
  Navigation as NavigationIcon,
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { KiaraBayCountdown } from '../lib/kiaraBay';
import { outletList } from '../lib/siteData';

export default function LocationsSection({ page = false }: { page?: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();
  const Heading = page ? 'h1' : 'h2';

  return (
    <section
      id="locations"
      className={`joy-locations${page ? ' joy-locations--page' : ''}`}
      aria-labelledby="locations-title"
    >
      <div className="joy-locations__pattern" aria-hidden="true" />
      <div className="joy-section-shell joy-locations__content">
        {page && (
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'Outlets' }]}
          />
        )}

        <motion.div
          ref={ref}
          className="joy-locations__heading"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="joy-section-kicker">Find our outlets</p>
          <Heading id="locations-title">
            {page ? 'JOY Dim Sum Outlets in Kuala Lumpur' : 'Two Outlets, Same JOY'}
          </Heading>
          {page && (
            <p className="joy-locations__intro">
              Sentul Point is serving every day, while our Kiara Bay table in
              Kepong is getting ready to open. Pick an outlet for the details,
              directions and latest verified information.
            </p>
          )}
        </motion.div>

        <div className="joy-locations__grid">
          {outletList.map((outlet, index) => (
            <motion.article
              key={outlet.slug}
              className={`joy-outlet-card${
                outlet.status === 'opening-soon' ? ' joy-outlet-card--opening' : ''
              }`}
              initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.58,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {outlet.status === 'opening-soon' && (
                <motion.span
                  className="joy-outlet-card__status"
                  animate={
                    isInView && !reduceMotion
                      ? { rotate: [0, -6, 6, -4, 4, 0], y: [0, -2, 0, -1, 0] }
                      : {}
                  }
                  transition={{ duration: 0.72, delay: 0.6, ease: 'easeInOut' }}
                >
                  Opening soon
                </motion.span>
              )}

              <h3>
                <a href={outlet.path}>{outlet.shortName}</a>
              </h3>
              <p className="joy-outlet-card__description">
                <span>{outlet.description}</span>
                {'formerName' in outlet && (
                  <span className="joy-outlet-card__former-name">
                    Formerly known as {outlet.formerName}.
                  </span>
                )}
              </p>

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
                {'hoursLabel' in outlet && (
                  <p>
                    <Clock aria-hidden="true" />
                    <span>{outlet.hoursLabel}</span>
                  </p>
                )}
                {'openingLabel' in outlet && (
                  <p>
                    <CalendarDays aria-hidden="true" />
                    <span>{outlet.openingLabel}</span>
                  </p>
                )}
              </div>

              <div className="joy-outlet-card__footer joy-outlet-card__footer--overview">
                <a
                  className="joy-outlet-card__button"
                  href={page ? outlet.path : outlet.mapsUrl}
                  target={page ? undefined : '_blank'}
                  rel={page ? undefined : 'noreferrer'}
                >
                  <NavigationIcon aria-hidden="true" size={17} />
                  Get Directions
                </a>
                {outlet.status === 'opening-soon' && <KiaraBayCountdown />}
              </div>
            </motion.article>
          ))}
        </div>
        {!page && (
          <div className="joy-locations__all-link">
            <a className="joy-button joy-button--green" href="/locations/">
              View All Outlets
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
