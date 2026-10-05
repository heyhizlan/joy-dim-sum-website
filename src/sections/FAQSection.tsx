import { type ReactNode, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

export const homepageFaqs: FaqItem[] = [
  {
    question: 'What does JOY Dim Sum serve?',
    answer:
      'We serve dim sum favourites, steamed dumplings, fluffy pau, savoury dishes, mains and more. Plenty to share, but if too sedap, ordering your own also can.',
  },
  {
    question: 'Does JOY Dim Sum serve dumplings?',
    answer:
      'Yes. Dumplings are part of our dim sum menu, with steamed favourites and different fillings served in shareable baskets.',
  },
  {
    question: 'Where can I find JOY Dim Sum?',
    answer: (
      <>
        Visit our <a href="/locations/kiara-bay-kepong/">Kiara Bay outlet</a> in
        Kepong, Kuala Lumpur.
      </>
    ),
  },
  {
    question: 'How can I get the latest JOY Dim Sum updates?',
    answer: (
      <>
        Follow @joydimsum.my on{' '}
        <a
          href="https://www.instagram.com/joydimsum.my/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>{' '}
        and{' '}
        <a
          href="https://www.facebook.com/joydimsum.my/"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>{' '}
        for promotions, menu news and outlet updates.
      </>
    ),
  },
];

export const allFaqs: FaqItem[] = [
  ...homepageFaqs,
  {
    question: 'What are the Kiara Bay opening hours?',
    answer:
      'JOY Dim Sum Kiara Bay is open Monday to Sunday, from 8am to 11pm.',
  },
  {
    question: 'Can I reserve a table at Kiara Bay?',
    answer: (
      <>
        Can! Message the Kiara Bay team on{' '}
        <a href="https://wa.me/60166102688" target="_blank" rel="noreferrer">
          WhatsApp
        </a>{' '}
        with your preferred date, time and number of guests.
      </>
    ),
  },
  {
    question: 'Can I get directions from this website?',
    answer:
      'Yes. Use the Get Directions button to open the Kiara Bay outlet in Google Maps.',
  },
  {
    question: 'Does JOY Dim Sum offer takeaway?',
    answer:
      'Takeaway availability can vary by item and outlet. Please check with the team before ordering.',
  },
  {
    question: 'Is the menu the same at every outlet?',
    answer:
      'The main JOY favourites lead the menu, while availability and selected dishes may vary by outlet.',
  },
  {
    question: 'Is JOY Dim Sum suitable for group meals?',
    answer:
      'Yes. JOY is made for sharing: dim sum, pau, savoury dishes and mains can all land in the middle of the table.',
  },
  {
    question: 'Are there any ingredients JOY Dim Sum does not serve?',
    answer:
      'JOY Dim Sum does not serve pork, lard or alcohol.',
  },
  {
    question: 'Can I visit JOY Dim Sum for lunch or dinner?',
    answer:
      'Yes. Kiara Bay serves daily from 8am to 11pm, so you can visit for breakfast, lunch or dinner.',
  },
  {
    question: 'Can I see the full menu online?',
    answer:
      'The website currently shows curated menu highlights. Ask the outlet team for the latest full menu and item availability.',
  },
  {
    question: 'What should I do if I have a food allergy?',
    answer:
      'Please tell the outlet team about any allergy or dietary requirement before ordering so they can guide you on current recipes and handling.',
  },
];

export default function FAQSection({
  items = homepageFaqs,
  sectionId = 'faq',
  kicker = 'Frequently Asked Questions',
  title = (
    <>
      <span>Got questions?</span>
      <span>
        Kita Settle<span className="joy-punctuation">!</span>
      </span>
    </>
  ),
  plain = false,
  page = false,
  showPageLink = false,
}: {
  items?: readonly FaqItem[];
  sectionId?: string;
  kicker?: string;
  title?: ReactNode;
  plain?: boolean;
  page?: boolean;
  showPageLink?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const titleId = `${sectionId}-title`;
  const Heading = page ? 'h1' : 'h2';

  return (
    <section
      id={sectionId}
      className={`joy-faq${plain ? ' joy-faq--plain' : ''}${
        page ? ' joy-faq--page' : ''
      }`}
      aria-labelledby={titleId}
    >
      <div className="joy-section-shell joy-faq__shell">
        <motion.div
          ref={ref}
          className="joy-faq__heading"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="joy-section-kicker">{kicker}</p>
          <Heading id={titleId}>{title}</Heading>
        </motion.div>

        <div className="joy-faq__list">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `${sectionId}-answer-${index}`;

            return (
              <article
                key={faq.question}
                className={`joy-faq__item${isOpen ? ' joy-faq__item--open' : ''}`}
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
        {showPageLink && (
          <div className="joy-faq__page-link">
            <a className="joy-button joy-button--green" href="/faqs/">
              View All FAQs
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
