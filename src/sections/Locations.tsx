import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CalendarDays, Clock, MapPin, Navigation } from 'lucide-react';

const outlets = [
  {
    name: 'Sentul Point',
    address:
      'AG-26, Sentul Point, Jln Sentul Pasar, Sentul, 51100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur',
    addressLines: [
      'AG-26, Sentul Point,',
      'Jln Sentul Pasar, Sentul,',
      '51100 Kuala Lumpur',
    ],
    description: 'Enjoy dim sum, pau and casual dining at JOY Dim Sum, Sentul Point, Kuala Lumpur. Come with family, friends or your usual makan gang.',
    formerName: 'Formerly known as Dim Sum House.',
    hours: 'Monday to Sunday, 10am to 10pm',
    mapsLink:
      'https://www.google.com/maps/place/Dim+Sum+House+@+Sentul+Point/@3.2019041,101.6893619,17z/data=!3m1!4b1!4m6!3m5!1s0x31cc47ea6c13790f:0x7bcae75188d28cc7!8m2!3d3.2019041!4d101.6893619!16s%2Fg%2F11z2hxfpsd',
  },
  {
    name: 'Kiara Bay',
    address:
      'The Beat at Kiara Bay, Karya Bayu Metropolitan, 51, Persiaran Putra Bayu, Kepong, 52100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur',
    addressLines: [
      'The Beat at Kiara Bay, Karya Bayu Metropolitan,',
      '51, Persiaran Putra Bayu, Kepong,',
      '52100 Kuala Lumpur',
    ],
    description: 'Good news, Kepong! A new JOY Dim Sum outlet is coming soon to Kiara Bay, Kuala Lumpur. More dim sum, more pau, more JOY dekat you.',
    note: 'Target opening 15 September 2026',
    mapsLink:
      'https://www.google.com/maps/search/?api=1&query=The+Beat+at+Kiara+Bay+51+Persiaran+Putra+Bayu+Kepong',
  },
] as const;

const kiaraBayOpeningDate = new Date('2026-09-15T00:00:00+08:00').getTime();

function getOpeningCountdown() {
  const difference = kiaraBayOpeningDate - Date.now();

  if (difference <= 0) return 'Opening day is here';

  const days = Math.floor(difference / 86_400_000);
  const hours = Math.floor((difference / 3_600_000) % 24);
  const minutes = Math.floor((difference / 60_000) % 60);

  return `${days}d ${hours}h ${minutes}m`;
}

function KiaraBayCountdown() {
  const [countdown, setCountdown] = useState('Counting down…');

  useEffect(() => {
    const updateCountdown = () => setCountdown(getOpeningCountdown());

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 60_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="joy-outlet-card__countdown" aria-live="polite">
      <span>Opening in</span>
      <strong>{countdown}</strong>
    </div>
  );
}

export default function Locations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="locations" className="joy-locations" aria-labelledby="locations-title">
      <div className="joy-locations__pattern" aria-hidden="true" />
      <div className="joy-section-shell joy-locations__content">
        <motion.div
          ref={ref}
          className="joy-locations__heading"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="joy-section-kicker">Find our outlets</p>
          <h2 id="locations-title">Two Outlets, Same JOY</h2>
        </motion.div>

        <div className="joy-locations__grid">
          {outlets.map((outlet, index) => (
            <motion.article
              key={outlet.name}
              className={
                'joy-outlet-card' +
                ('note' in outlet ? ' joy-outlet-card--opening' : '')
              }
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.58,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {'note' in outlet && (
                <motion.span
                  className="joy-outlet-card__status"
                  animate={
                    isInView
                      ? { rotate: [0, -6, 6, -4, 4, 0], y: [0, -2, 0, -1, 0] }
                      : {}
                  }
                  transition={{ duration: 0.72, delay: 0.6, ease: 'easeInOut' }}
                >
                  Opening soon
                </motion.span>
              )}
              <h3>{outlet.name}</h3>
              <p className="joy-outlet-card__description">
                <span>{outlet.description}</span>
                {'formerName' in outlet && (
                  <span className="joy-outlet-card__former-name">
                    {outlet.formerName}
                  </span>
                )}
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
                {'hours' in outlet && (
                  <p>
                    <Clock aria-hidden="true" />
                    <span>{outlet.hours}</span>
                  </p>
                )}
                {'note' in outlet && (
                  <p>
                    <CalendarDays aria-hidden="true" />
                    <span>{outlet.note}</span>
                  </p>
                )}
              </div>

              <div className="joy-outlet-card__footer">
                <a
                  className="joy-outlet-card__button"
                  href={outlet.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Navigation aria-hidden="true" size={18} />
                  Get Directions
                </a>
                {'note' in outlet && <KiaraBayCountdown />}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
