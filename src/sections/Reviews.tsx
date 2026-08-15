import { useEffect, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';

const sentulGoogleMaps =
  'https://www.google.com/maps/place/Dim+Sum+House+@+Sentul+Point/@3.2019041,101.6893619,17z/data=!3m1!4b1!4m6!3m5!1s0x31cc47ea6c13790f:0x7bcae75188d28cc7!8m2!3d3.2019041!4d101.6893619!16s%2Fg%2F11z2hxfpsd';

const googleReviews = [
  {
    author: 'Dennis',
    excerpt: 'The environment is very nice.',
    date: '2 months ago',
    stars: 5,
  },
  {
    author: 'Melody Saturday',
    excerpt: 'Friendly staff and good environment too.',
    date: '1 month ago',
    stars: 5,
  },
  {
    author: 'erlina erlina',
    excerpt: 'I like the lotus leaf bun with the chicken.',
    date: '4 months ago',
    stars: 5,
  },
  {
    author: 'Moon Low',
    excerpt: 'The food is tasty and hot. Nice food presentation too.',
    date: '2 weeks ago',
    stars: 4,
  },
  {
    author: 'Jimmy G',
    excerpt: 'The portion is great and the taste is great too!',
    date: '2 months ago',
    stars: 5,
  },
] as const;

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
        <span>{review.date} on Google</span>
      </footer>
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
        <p>30+ reviews on Google</p>
        <h3>
          4.5+ stars. Big JOY<span className="joy-punctuation">!</span>
        </h3>
        <span>See what guests are sharing about their table at Sentul Point.</span>
      </div>
      <a
        className="joy-reviews__button"
        href={sentulGoogleMaps}
        target="_blank"
        rel="noreferrer"
        tabIndex={duplicate ? -1 : undefined}
      >
        Open Google Reviews
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
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !isInView) return;

    const interval = window.setInterval(() => {
      const scroller = scrollerRef.current;
      if (!scroller || pausedRef.current) return;

      const cards = scroller.querySelectorAll<HTMLElement>('[data-review-card]');
      const originalCardCount = googleReviews.length + 1;
      const nextCard = currentCardRef.current + 1;
      const target = cards[nextCard];
      const first = cards[0];
      if (!target || !first) return;

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
    };
  }, [isInView, reduceMotion]);

  return (
    <section id="reviews" className="joy-reviews" aria-labelledby="reviews-title">
      <div className="joy-section-shell joy-reviews__shell">
        <motion.div
          ref={ref}
          className="joy-reviews__heading"
          initial={{ opacity: 0, y: 26 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="joy-section-kicker">Reviews</p>
          <h2 id="reviews-title">What people say</h2>
        </motion.div>

        <div
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
        >
          {googleReviews.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
          <ReviewCta />
          {googleReviews.map((review) => (
            <ReviewCard key={`duplicate-${review.author}`} review={review} duplicate />
          ))}
          <ReviewCta duplicate />
        </div>
      </div>
    </section>
  );
}
