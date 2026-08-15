import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import harKau from '../assets/seo/joy-dim-sum-har-kau-kuala-lumpur.png';
import lohMaiKai from '../assets/seo/joy-dim-sum-loh-mai-kai-kuala-lumpur.png';
import scallopDumpling from '../assets/seo/joy-dim-sum-scallop-dumpling-kuala-lumpur.png';
import shanghaiDumpling from '../assets/seo/joy-dim-sum-shanghai-dumpling-kuala-lumpur.png';
import siewMai from '../assets/seo/joy-dim-sum-siew-mai-kuala-lumpur.png';
import chickenPau from '../assets/seo/joy-dim-sum-chicken-pau-kuala-lumpur.png';
import gulaMelakaMantau from '../assets/seo/joy-dim-sum-gula-melaka-mantau-kuala-lumpur.png';
import pandanKayaPau from '../assets/seo/joy-dim-sum-pandan-kaya-pau-kuala-lumpur.png';
import redBeanPau from '../assets/seo/joy-dim-sum-red-bean-pau-kuala-lumpur.png';
import saltedEggPau from '../assets/seo/joy-dim-sum-salted-egg-pau-kuala-lumpur.png';

const featuredFood = [
  {
    category: 'Dim Sum',
    name: 'Siew Mai',
    image: siewMai,
    story: 'Four in the basket. Somehow the last one is always a negotiation.',
    tone: 'yellow',
  },
  {
    category: 'Dim Sum',
    name: 'Har Kau',
    image: harKau,
    story: 'A basket arrives and everyone pays attention. Best shared while it is still warm.',
    tone: 'pink',
  },
  {
    category: 'Dim Sum',
    name: 'Loh Mai Kai',
    image: lohMaiKai,
    story: 'A little more filling and a little harder to share. Order one each, can.',
    tone: 'green',
  },
  {
    category: 'Dim Sum',
    name: 'Scallop Dumpling',
    image: scallopDumpling,
    story: 'Three colours on the table, then three empty spaces. That was quick.',
    tone: 'beige',
  },
  {
    category: 'Dim Sum',
    name: 'Shanghai Dumpling',
    image: shanghaiDumpling,
    story: 'Careful on the first bite. The rest of the table can wait a second.',
    tone: 'yellow',
  },
  {
    category: 'Pau',
    name: 'Chicken Pau',
    image: chickenPau,
    story: 'Pull one apart while it is warm. The next basket will make sense soon.',
    tone: 'pink',
  },
  {
    category: 'Pau',
    name: 'Salted Egg Pau',
    image: saltedEggPau,
    story: 'Bright yellow, soft and gone fast. Better get another basket.',
    tone: 'yellow',
  },
  {
    category: 'Pau',
    name: 'Pandan Kaya Pau',
    image: pandanKayaPau,
    story: 'Green, fluffy and made for the slow part of breakfast.',
    tone: 'green',
  },
  {
    category: 'Pau',
    name: 'Red Bean Pau',
    image: redBeanPau,
    story: 'Quietly sweet. Good with tea and a table that is in no rush.',
    tone: 'beige',
  },
  {
    category: 'Pau',
    name: 'Gula Melaka Mantau',
    image: gulaMelakaMantau,
    story: 'One big spiral for everyone to tear into. Sharing rules are flexible.',
    tone: 'pink',
  },
] as const;

export default function Menu() {
  const headingRef = useRef(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: '-100px' });

  const scrollCards = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * Math.min(track.clientWidth * 0.82, 430),
      behavior: 'smooth',
    });
  };

  return (
    <section id="menu" className="joy-menu" aria-labelledby="menu-title">
      <div className="joy-section-shell">
        <motion.div
          ref={headingRef}
          className="joy-menu__heading"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="joy-section-kicker">What we serve</p>
            <h2 id="menu-title">
              Pick a basket<span className="joy-punctuation">!</span>
            </h2>
            <p>
              <span>Five dim sum favourites lead the way.</span>
              <span>Five pau follow when there is still room.</span>
            </p>
          </div>

          <div className="joy-menu__actions">
            <div className="joy-menu__full-menu-wrap">
              <button
                className="joy-menu__full-menu"
                type="button"
                aria-disabled="true"
                title="Full PDF menu coming soon"
              >
                See full menu
                <FileText aria-hidden="true" />
              </button>
            </div>
            <div className="joy-menu__controls" aria-label="Menu card controls">
              <button type="button" onClick={() => scrollCards(-1)} aria-label="Previous food">
                <ArrowLeft aria-hidden="true" />
              </button>
              <button type="button" onClick={() => scrollCards(1)} aria-label="Next food">
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div
        ref={trackRef}
        className="joy-menu__track"
        aria-label="Curated dim sum and pau"
        tabIndex={0}
      >
        {featuredFood.map((food) => (
          <article
            key={food.name}
            className={'joy-food-card joy-food-card--' + food.tone}
          >
            <div className="joy-food-card__image">
              <img
                src={food.image}
                alt={'A bamboo basket of ' + food.name + ' at JOY Dim Sum Kuala Lumpur'}
                loading="lazy"
              />
            </div>
            <div className="joy-food-card__copy">
              <h3>{food.name}</h3>
              <p>{food.story}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
