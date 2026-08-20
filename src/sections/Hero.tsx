import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, Heart, MapPin } from 'lucide-react';
import harKau from '../assets/seo/joy-dim-sum-har-kau-kuala-lumpur.webp';
import siewMai from '../assets/seo/joy-dim-sum-siew-mai-kuala-lumpur.webp';

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
              Dim sum in Sentul and Kepong
            </span>

            <span className="joy-hero__headline">
              <span>FULL BITE</span>
              <span><span className="joy-hero__of">OF</span> <span className="joy-hero__joy">JOY</span></span>
            </span>
          </h1>

          <p className="joy-hero__lede">
            Dim sum, pau and plenty more to share. Come hungry, bring your makan
            gang and stay a bit longer, lah.
          </p>

          <div className="joy-hero__actions">
            <a className="joy-button joy-button--primary" href="#menu">
              View Our Menu
              <ArrowDownRight aria-hidden="true" size={19} strokeWidth={2.4} />
            </a>
            <a className="joy-button joy-button--secondary" href="#locations">
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
                  reduceMotion ? undefined : { rotate: [0, -3, 3, -2, 2, 0] }
                }
                transition={{ duration: 0.82, delay: 0.9, ease: 'easeInOut' }}
              >
                <img
                  src={siewMai}
                  alt="A bamboo basket of four siew mai dumplings at JOY Dim Sum in Sentul, Kuala Lumpur"
                  width="1184"
                  height="1070"
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
                  reduceMotion ? undefined : { rotate: [0, 3, -3, 2, -2, 0] }
                }
                transition={{ duration: 0.82, delay: 1.04, ease: 'easeInOut' }}
              >
                <img
                  src={harKau}
                  alt="A bamboo basket of colourful har kau dumplings at JOY Dim Sum in Sentul, Kuala Lumpur"
                  width="1210"
                  height="1084"
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
