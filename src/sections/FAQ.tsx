import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What does JOY Dim Sum serve?',
    answer:
      'We serve dim sum favourites, fluffy pau, savoury dishes, mains and more. Plenty to share, but if too sedap, ordering your own also can.',
  },
  {
    question: 'Where can I find JOY Dim Sum?',
    answer:
      'Visit JOY Dim Sum at Sentul Point in Sentul, Kuala Lumpur. Our new Kiara Bay outlet is also coming soon to Kepong.',
  },
  {
    question: 'When is the JOY Dim Sum Kiara Bay outlet opening?',
    answer:
      'Our current target opening date is 16 September 2026. Follow JOY Dim Sum for the latest Kiara Bay opening updates.',
  },
  {
    question: 'What are the opening hours at Sentul Point?',
    answer:
      'JOY Dim Sum at Sentul Point is open Monday to Sunday, from 10am to 10pm. Lunch, tea or dinner, come whenever you\'re craving dim sum.',
  },
  {
    question: 'How can I get the latest JOY Dim Sum updates?',
    answer: (
      <>
        Follow @joydimsum.my on <a href="https://www.instagram.com/joydimsum.my/" target="_blank" rel="noreferrer">Instagram</a> and <a href="https://www.facebook.com/joydimsum.my/" target="_blank" rel="noreferrer">Facebook</a> for promotions, menu news and the latest Kiara Bay opening updates.
      </>
    ),
  },
  {
    question: 'Can I make a table reservation?',
    answer: (
      <>
        Can! For table reservations, WhatsApp us at <a href="https://wa.me/60166102688" target="_blank" rel="noreferrer">016-610 2688</a>. Just tell us your date, time and number of pax, then we settle for you, okay?
      </>
    ),
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="joy-faq" aria-labelledby="faq-title">
      <div className="joy-section-shell joy-faq__shell">
        <motion.div
          ref={ref}
          className="joy-faq__heading"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="joy-section-kicker">Frequently Asked Questions</p>
          <h2 id="faq-title">
            <span>Got questions?</span>
            <span>
              Kita Settle<span className="joy-punctuation">!</span>
            </span>
          </h2>
        </motion.div>

        <div className="joy-faq__list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = 'faq-answer-' + index;

            return (
              <article
                key={faq.question}
                className={'joy-faq__item' + (isOpen ? ' joy-faq__item--open' : '')}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span>{faq.question}</span>
                  <motion.span
                    className="joy-faq__icon"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown aria-hidden="true" />
                  </motion.span>
                </button>

                <motion.div
                  id={answerId}
                  className="joy-faq__answer"
                  initial={false}
                  animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
