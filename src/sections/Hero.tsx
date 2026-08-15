import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, Heart, MapPin } from 'lucide-react';
import harKau from '../assets/seo/joy-dim-sum-har-kau-kuala-lumpur.png';
import siewMai from '../assets/seo/joy-dim-sum-siew-mai-kuala-lumpur.png';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="joy-hero" aria-labelledby="joy-hero-title">
      <div className="joy-hero__pattern" aria-hidden="true" />

      <div className="joy-hero__inner">
        <motion.div
          className="joy-hero__content"
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="joy-hero__eyebrow">
            <Heart aria-hidden="true" size={17} strokeWidth={2.6} fill="currentColor" />
            Small bites. Full table.
          </p>

          <h1 id="joy-hero-title" className="joy-hero__headline">
            <span>FULL BITE</span>
            <span>OF JOY</span>
          </h1>

          <p className="joy-hero__lede">
            Dim sum first, pau next, and plenty more to share. Come hungry and
            stay a little longer.
          </p>

          <div className="joy-hero__actions">
            <a className="joy-button joy-button--primary" href="#menu">
              View the menu
              <ArrowDownRight aria-hidden="true" size={19} strokeWidth={2.4} />
            </a>
            <a className="joy-button joy-button--secondary" href="#locations">
              <MapPin aria-hidden="true" size={18} strokeWidth={2.4} />
              Find us
            </a>
          </div>
        </motion.div>

        <motion.div
          className="joy-hero__visual"
          initial={reduceMotion ? false : { opacity: 0, x: 42 }}
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
                  fetchPriority="high"
                  draggable="false"
                />
              </motion.div>
            </figure>

            <article className="joy-comic-panel joy-comic-panel--copy joy-comic-panel--pink">
              <p>One more basket?</p>
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
                  fetchPriority="high"
                  draggable="false"
                />
              </motion.div>
            </figure>
          </div>
        </motion.div>
      </div>

      <a className="joy-hero__scroll" href="#menu">
        Keep scrolling
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
