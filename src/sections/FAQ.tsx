import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What does JOY serve?',
    answer:
      'Dim sum leads the table, with pau, savoury dishes, mains and more alongside it.',
  },
  {
    question: 'Where can I find JOY?',
    answer:
      'Visit us at Sentul Point in Sentul. Kiara Bay is coming soon to Kepong.',
  },
  {
    question: 'When is Kiara Bay opening?',
    answer:
      'The current target opening date is 15 September 2026. Follow JOY for the latest update.',
  },
  {
    question: 'What are Sentul Point’s opening hours?',
    answer:
      'Sentul Point is open Monday to Sunday, from 8am to 11pm.',
  },
  {
    question: 'How can I get the latest JOY updates?',
    answer:
      'Follow @joydimsum.my on Instagram or Facebook for campaigns, menu news and Kiara Bay opening updates.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="joy-faq" aria-labelledby="faq-title">
      <div className="joy-section-shell joy-faq__shell">
        <motion.div
          ref={ref}
          className="joy-faq__heading"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="joy-section-kicker">Frequently Asked Questions</p>
          <h2 id="faq-title">Quick questions</h2>
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
