import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="joy-about" aria-labelledby="about-title">
      <div className="joy-section-shell joy-about__content">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -28 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="joy-section-kicker">The story</p>
          <h2 id="about-title">A good table with people you like</h2>
        </motion.div>

        <motion.div
          className="joy-about__copy"
          initial={{ opacity: 0, x: 28 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.65,
            delay: 0.14,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p>
            A good JOY table has steam in the air, baskets in the middle and
            someone reaching for the last piece. Nobody needs to make a big
            deal of it.
          </p>
          <p>
            Dim sum leads, pau follows, and there is more when you want a
            proper meal. Come hungry. Stay a little longer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
