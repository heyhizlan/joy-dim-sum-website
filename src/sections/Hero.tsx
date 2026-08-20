import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, Heart, MapPin } from 'lucide-react';
import chickenGreenDumpling from '../assets/seo/joy-dim-sum-chicken-green-dumpling-top-view.webp';
import scallopDumpling from '../assets/seo/joy-dim-sum-scallop-dumpling-top-view.webp';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="joy-hero" aria-labelledby="joy-hero-title">
      <div className="joy-hero__pattern" aria-hidden="true" />

      <div className="joy-hero__inner">
        <motion.div
          className="joy-hero__content"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* One h1 carrying both the keyword line and the visual headline, so the
              page's main heading is not just the small kicker. Styling stays on the
              inner elements, so nothing moves. */}
          <h1 id="joy-hero-title" className="joy-hero__title">
            <span className="joy-hero__eyebrow">
              <Heart aria-hidden="true" size={17} strokeWidth={2.6} fill="currentColor" />
              Dim Sum Restaurant in Kuala Lumpur
            </span>

            <span className="joy-hero__headline">
              <span>FULL BITE</span>
              <span><span className="joy-hero__of">OF</span> <span className="joy-hero__joy">JOY</span></span>
            </span>
          </h1>

          <p className="joy-hero__lede">
            Dim sum, pau and plenty more to share at Sentul Point and Kiara Bay,
            Kepong. Come hungry, bring your makan gang and stay a bit longer, lah.
          </p>

          <div className="joy-hero__actions">
            <a className="joy-button joy-button--primary" href="/menu/">
              View Our Menu
              <ArrowDownRight aria-hidden="true" size={19} strokeWidth={2.4} />
            </a>
            <a className="joy-button joy-button--secondary" href="/locations/">
              <MapPin aria-hidden="true" size={18} strokeWidth={2.4} />
              Find an Outlet
            </a>
          </div>
        </motion.div>

        <motion.div
          className="joy-hero__visual"
          initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 42 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="joy-hero__comic">
            <figure className="joy-comic-panel joy-comic-panel--photo joy-comic-panel--yellow">
              <motion.div
                className="joy-comic-panel__image-motion"
                animate={
                  reduceMotion ? undefined : { rotate: [0, 360] }
                }
                transition={{ duration: 4.2, delay: 0.45, ease: 'linear' }}
              >
                <img
                  src={chickenGreenDumpling}
                  alt="Top view of green chicken dumplings in a bamboo basket at JOY Dim Sum"
                  width="1789"
                  height="1800"
                  fetchPriority="high"
                  draggable="false"
                />
              </motion.div>
            </figure>

            <article className="joy-comic-panel joy-comic-panel--copy joy-comic-panel--pink">
              <p>ONE MORE BASKET?</p>
            </article>

            <article className="joy-comic-panel joy-comic-panel--copy joy-comic-panel--beige-copy">
              <p>
                Quickly pass this side<span className="joy-punctuation">!</span>
              </p>
            </article>

            <figure className="joy-comic-panel joy-comic-panel--photo joy-comic-panel--beige">
              <motion.div
                className="joy-comic-panel__image-motion"
                animate={
                  reduceMotion ? undefined : { rotate: [0, -360] }
                }
                transition={{ duration: 4.2, delay: 0.6, ease: 'linear' }}
              >
                <img
                  src={scallopDumpling}
                  alt="Top view of colourful scallop dumplings in a bamboo basket at JOY Dim Sum"
                  width="540"
                  height="540"
                  fetchPriority="high"
                  draggable="false"
                />
              </motion.div>
            </figure>
          </div>
        </motion.div>
      </div>

      <a className="joy-hero__scroll" href="#menu">
        See what&apos;s steaming
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
