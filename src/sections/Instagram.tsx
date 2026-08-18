import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, AtSign } from 'lucide-react';
import fishAndChips from '../assets/seo/joy-dim-sum-fish-and-chips-value-deal-kuala-lumpur.webp';
import dimSumDeal from '../assets/seo/joy-dim-sum-buy-four-free-one-dim-sum.webp';
import pauDeal from '../assets/seo/joy-dim-sum-buy-four-free-one-pau.webp';
import siewMaiHighlight from '../assets/seo/joy-dim-sum-siew-mai-menu-highlight.webp';
import tongSui from '../assets/seo/joy-dim-sum-tong-sui-dessert-soup.webp';
import nasiKawKaw from '../assets/seo/joy-dim-sum-nasi-kaw-kaw-value-deal.webp';

const socialPosts = [
  {
    image: fishAndChips,
    alt: 'JOY Dim Sum Kuala Lumpur fish and chips value deal with iced tea',
    width: 631,
    height: 875,
  },
  {
    image: dimSumDeal,
    alt: 'JOY Dim Sum buy four get one free promotion featuring assorted dim sum',
    width: 631,
    height: 875,
  },
  {
    image: pauDeal,
    alt: 'JOY Dim Sum buy four get one free promotion featuring assorted pau',
    width: 631,
    height: 875,
  },
  {
    image: siewMaiHighlight,
    alt: 'JOY Dim Sum siew mai menu highlight with a bamboo basket of dumplings',
    width: 1240,
    height: 1750,
  },
  {
    image: tongSui,
    alt: 'JOY Dim Sum tong sui dessert soup promotion in Kuala Lumpur',
    width: 631,
    height: 875,
  },
  {
    image: nasiKawKaw,
    alt: 'JOY Dim Sum Nasi Kaw Kaw value deal in Kuala Lumpur',
    width: 631,
    height: 875,
  },
];

export default function Instagram() {
  const ref = useRef(null);
  const [showAllPosts, setShowAllPosts] = useState(false);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="instagram" className="joy-instagram" aria-labelledby="instagram-title">
      <div className="joy-section-shell">
        <motion.div
          ref={ref}
          className="joy-instagram__heading"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="joy-section-kicker">Latest News</p>
          <h2 id="instagram-title">
            <span>What&apos;s Happening</span>
            <span>at JOY Dim Sum</span>
          </h2>
          <p className="joy-instagram__intro">
            New menu items, promotions and outlet updates. All the good stuff is here.
          </p>
          <p className="joy-instagram__intro">
            Follow <a className="joy-inline-link" href="https://www.instagram.com/joydimsum.my/" target="_blank" rel="noreferrer">@joydimsum.my</a> for the latest JOY Dim Sum news.
          </p>
        </motion.div>

        <div
          className={
            'joy-instagram__grid' +
            (showAllPosts ? ' joy-instagram__grid--expanded' : '')
          }
        >
          {socialPosts.map((post, index) => (
            <a
              key={post.alt}
              className={
                'joy-instagram__tile' +
                (index >= 3 ? ' joy-instagram__tile--more' : '')
              }
              href="https://www.instagram.com/joydimsum.my/"
              target="_blank"
              rel="noreferrer"
              aria-label={post.alt + ', open JOY on Instagram'}
            >
              <img
                src={post.image}
                alt={post.alt}
                width={post.width}
                height={post.height}
                loading="lazy"
              />
            </a>
          ))}
        </div>

        <div className="joy-instagram__more">
          <button
            type="button"
            onClick={() => setShowAllPosts((isExpanded) => !isExpanded)}
            aria-expanded={showAllPosts}
          >
            {showAllPosts ? 'Show less' : 'Show more'}
          </button>
        </div>

        <div className="joy-instagram__follow">
          <a
            href="https://www.instagram.com/joydimsum.my/"
            target="_blank"
            rel="noreferrer"
          >
            <AtSign aria-hidden="true" size={18} />
            Follow @joydimsum.my for updates
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
