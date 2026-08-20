import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type SectionRevealProps = {
  children: ReactNode;
};

export default function SectionReveal({ children }: SectionRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="joy-section-reveal"
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
