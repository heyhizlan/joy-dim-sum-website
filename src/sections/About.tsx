import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="joy-about" aria-labelledby="about-title">
      <div className="joy-section-shell joy-about__content">
        <motion.div
          ref={ref}
          initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -28 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="joy-section-kicker">Story</p>
          <h2 id="about-title">
            <span>More Food,</span>
            <span>More People,</span>
            <span className="joy-about__joy">
              More JOY<span className="joy-punctuation">!</span>
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="joy-about__copy"
          initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 28 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.65,
            delay: 0.14,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p>
            A proper JOY table has steam in the air, bamboo baskets in the middle
            and somebody quietly reaching for the last piece. No need so formal.
            Just makan, share and enjoy.
          </p>
          <p>
            Dim sum leads the table, pau comes next, and we have savoury dishes
            and mains whenever you want a fuller meal.
          </p>
          <p>
            Come hungry. Bring your favourite people. Stay a bit longer, can?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
