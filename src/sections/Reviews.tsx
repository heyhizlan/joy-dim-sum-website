import { useEffect, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';

const kiaraBayGoogleMaps = 'https://maps.app.goo.gl/PAGM7fZnBRZ3gtWf8';

const reviewLink = (reviewId: string) =>
  `https://www.google.com/maps/place/JOY+Dim+Sum+%C2%B7+Kiara+Bay/@3.2251402,101.6504669,17z/data=!4m8!3m7!1s0x31cc47aca9731587:0x9048736172d7481b!8m2!3d3.2251402!4d101.6504669!9m1!1b1!16s%2Fg%2F11zf69cfjx?reviewId=${reviewId}`;

const googleReviews = [
  {
    author: 'Tan Chee Way',
    excerpt: 'Delicious food, friendly staff, and a clean, cozy environment.',
    stars: 5,
    reviewLink: reviewLink('Ci9DQUlRQUNvZENodHljRjlvT2paMFlpMVJSV054TTNOa1MwOWFPVVpWVFZwTFUxRRAB'),
  },
  {
    author: 'Miss N',
    excerpt: 'Food is reasonably priced. Lots of choices. Suitable for all ages. The shop is clean and beautiful. The staff is also friendly.',
    stars: 5,
    reviewLink: reviewLink('Ci9DQUlRQUNvZENodHljRjlvT2xwZmFtOHpSbVI1U2twMlQyMUZhSEZyUjNGWFZsRRAB'),
  },
  {
    author: 'Ai Ping Goh',
    excerpt: 'The dim sum is overall good, and they provide various types of sauces to go with. Especially love the fried carrot cake with the mala sauce.',
    stars: 5,
    reviewLink: reviewLink('Ci9DQUlRQUNvZENodHljRjlvT21oM1UwZFhSbTg1V0d0d2FsUnpkVEZYUm14cVIxRRAB'),
  },
  {
    author: 'Aiden Chang',
    excerpt: 'Service and environment is good, staffs very attentive 👍',
    stars: 5,
    reviewLink: reviewLink('Ci9DQUlRQUNvZENodHljRjlvT2pCVE5ucENPVU4xVm5aTlZESnFNMGxpWVRCblQxRRAB'),
  },
  {
    author: 'Low Ken Leong',
    excerpt: 'Good service and delicious 👍',
    stars: 5,
    reviewLink: reviewLink('Ci9DQUlRQUNvZENodHljRjlvT21SS1NYRTVWMmRxY1ZWQ1YyaEdXSEJpYzNwcWNHYxAB'),
  },
] as const;

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.92h5.38a4.6 4.6 0 0 1-2 3.02v2.54h3.24c1.9-1.75 2.98-4.33 2.98-7.41Z" />
      <path fill="currentColor" d="M12 22c2.7 0 4.98-.9 6.64-2.36l-3.24-2.54c-.9.6-2.05.96-3.4.96-2.61 0-4.82-1.77-5.61-4.15H3.04v2.62A10 10 0 0 0 12 22Z" />
      <path fill="currentColor" d="M6.39 13.91A6 6 0 0 1 6.08 12c0-.66.11-1.31.31-1.91V7.47H3.04A10 10 0 0 0 2 12c0 1.61.38 3.14 1.04 4.53l3.35-2.62Z" />
      <path fill="currentColor" d="M12 5.94c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.63 9.63 0 0 0 12 2a10 10 0 0 0-8.96 5.47l3.35 2.62C7.18 7.71 9.39 5.94 12 5.94Z" />
    </svg>
  );
}

function ReviewCard({
  review,
  duplicate = false,
}: {
  review: (typeof googleReviews)[number];
  duplicate?: boolean;
}) {
  return (
    <article
      className="joy-review-card"
      data-review-card
      aria-hidden={duplicate ? 'true' : undefined}
    >
      <div
        className="joy-review-card__stars"
        aria-label={`${review.stars} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            fill={index < review.stars ? 'currentColor' : 'none'}
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote>“{review.excerpt}”</blockquote>
      <footer>
        <strong>{review.author}</strong>
      </footer>
      <a
        className="joy-review-card__google"
        href={review.reviewLink}
        target="_blank"
        rel="noreferrer"
        tabIndex={duplicate ? -1 : undefined}
        aria-label={`Read ${review.author}'s review on Google`}
      >
        <GoogleIcon />
      </a>
    </article>
  );
}

function ReviewCta({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <article
      className="joy-review-card joy-review-card--cta"
      data-review-card
      aria-hidden={duplicate ? 'true' : undefined}
    >
      <div>
        <p>Guest reviews on Google</p>
        <h3>
          4.9 Stars. Wah, Big JOY<span className="joy-punctuation">!</span>
        </h3>
        <span>See what our guests are saying about JOY Dim Sum at Kiara Bay.</span>
      </div>
      <a
        className="joy-reviews__button"
        href={kiaraBayGoogleMaps}
        target="_blank"
        rel="noreferrer"
        tabIndex={duplicate ? -1 : undefined}
      >
        Read Our Google Reviews
        <ArrowUpRight aria-hidden="true" />
      </a>
    </article>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const currentCardRef = useRef(0);
  const pausedRef = useRef(false);
  const resetTimerRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  // Separate, non-`once` gate: the heading reveal should latch after its first
  // pass, but autoplay was left running (and scrolling) long after the section
  // had gone off-screen.
  const scrollerInView = useInView(scrollerRef, { amount: 0.15 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !scrollerInView) return;

    const interval = window.setInterval(() => {
      const scroller = scrollerRef.current;
      if (!scroller || pausedRef.current) return;

      const cards = scroller.querySelectorAll<HTMLElement>('[data-review-card]');
      const originalCardCount = googleReviews.length + 1;
      const first = cards[0];
      if (!first) return;

      // Derive the current card from where the scroller actually is, so a manual
      // swipe is respected instead of being pulled back to a stale counter.
      let currentCard = 0;
      for (let index = 0; index < cards.length; index += 1) {
        const offset = cards[index].offsetLeft - first.offsetLeft;
        if (offset <= scroller.scrollLeft + 4) currentCard = index;
      }

      const nextCard = currentCard + 1;
      const target = cards[nextCard];
      if (!target) return;

      scroller.scrollTo({
        left: target.offsetLeft - first.offsetLeft,
        behavior: 'smooth',
      });
      currentCardRef.current = nextCard;

      if (nextCard === originalCardCount) {
        resetTimerRef.current = window.setTimeout(() => {
          scroller.scrollTo({ left: 0, behavior: 'auto' });
          currentCardRef.current = 0;
        }, 700);
      }
    }, 3200);

    return () => {
      window.clearInterval(interval);
      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
      }
      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, [scrollerInView, reduceMotion]);

  return (
    <section id="reviews" className="joy-reviews" aria-labelledby="reviews-title">
      <div className="joy-section-shell joy-reviews__shell">
        <motion.div
          ref={ref}
          className="joy-reviews__heading"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="joy-section-kicker">Customer Reviews</p>
          <h2 id="reviews-title">What People Say</h2>
          <p>Good food tastes even better when people share the JOY.</p>
        </motion.div>

        <section
          ref={scrollerRef}
          className="joy-reviews__scroller"
          aria-label="Featured Google reviews"
          tabIndex={0}
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
          onFocusCapture={() => {
            pausedRef.current = true;
          }}
          onBlurCapture={() => {
            pausedRef.current = false;
          }}
          onTouchStart={() => {
            pausedRef.current = true;
          }}
          onTouchEnd={() => {
            // Let the flick settle before autoplay may resume.
            if (resumeTimerRef.current !== null) {
              window.clearTimeout(resumeTimerRef.current);
            }
            resumeTimerRef.current = window.setTimeout(() => {
              pausedRef.current = false;
            }, 4000);
          }}
        >
          {googleReviews.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
          <ReviewCta />
          {googleReviews.map((review) => (
            <ReviewCard key={`duplicate-${review.author}`} review={review} duplicate />
          ))}
          <ReviewCta duplicate />
        </section>
      </div>
    </section>
  );
}
