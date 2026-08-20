import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import chickenSiewMai from '../assets/seo/joy-dim-sum-chicken-siew-mai.webp';
import otakOtakDumpling from '../assets/seo/joy-dim-sum-otak-otak-dumpling.webp';
import lohMaiKai from '../assets/seo/joy-dim-sum-loh-mai-kai-kuala-lumpur.webp';
import scallopDumpling from '../assets/seo/joy-dim-sum-scallop-dumpling-2.webp';
import shanghaiDumpling from '../assets/seo/joy-dim-sum-shanghai-dumpling-2.webp';
import siewLongPau from '../assets/seo/joy-dim-sum-siew-long-pau.webp';
import dragonfruitDumpling from '../assets/seo/joy-dim-sum-dragonfruit-dumpling.webp';
import pandanKayaPau from '../assets/seo/joy-dim-sum-pandan-kaya-pau-kuala-lumpur.webp';
import redBeanPau from '../assets/seo/joy-dim-sum-red-bean-pau-kuala-lumpur.webp';
import saltedEggPau from '../assets/seo/joy-dim-sum-salted-egg-pau-kuala-lumpur.webp';

export const featuredFood = [
  {
    category: 'Dim Sum',
    name: 'Chicken Siew Mai',
    image: chickenSiewMai,
    width: 1157,
    height: 1043,
    story: 'Juicy chicken siew mai, steamed and ready to share. Four in the basket, so settle the last one nicely.',
    tone: 'yellow',
  },
  {
    category: 'Dim Sum',
    name: 'Otak-otak Dumpling',
    image: otakOtakDumpling,
    width: 1157,
    height: 1043,
    story: 'A little spicy, a little smoky and wrapped up in one steamy bite. Otak-otak flavour, dim sum style.',
    tone: 'pink',
  },
  {
    category: 'Dim Sum',
    name: 'Loh Mai Kai',
    image: lohMaiKai,
    width: 1144,
    height: 1051,
    story: 'Warm, savoury and extra satisfying. Sharing is good, but ordering one each also can.',
    tone: 'green',
  },
  {
    category: 'Dim Sum',
    name: 'Scallop Dumpling',
    image: scallopDumpling,
    width: 1145,
    height: 1025,
    story: 'Three colourful dumplings arrive. Three empty spots appear. Wah, that was fast.',
    tone: 'beige',
  },
  {
    category: 'Dim Sum',
    name: 'Shanghai Dumpling',
    image: shanghaiDumpling,
    width: 1157,
    height: 1043,
    story: 'Careful with the first bite. Juicy inside! Take your time, the rest can wait awhile.',
    tone: 'yellow',
  },
  {
    category: 'Pau',
    name: 'Siew Long Pau',
    image: siewLongPau,
    width: 1157,
    height: 1043,
    story: 'Soft, fluffy pau with a savoury filling. Pull one apart while it is warm and share if you can.',
    tone: 'pink',
  },
  {
    category: 'Pau',
    name: 'Salted Egg Pau',
    image: saltedEggPau,
    width: 972,
    height: 821,
    story: 'Soft pau with rich, creamy salted egg filling. Better order another basket because this one goes fast.',
    tone: 'yellow',
  },
  {
    category: 'Pau',
    name: 'Pandan Kaya Pau',
    image: pandanKayaPau,
    width: 1033,
    height: 864,
    story: 'Fluffy pandan pau with sweet kaya filling. Sedap with tea and perfect for a slow breakfast.',
    tone: 'green',
  },
  {
    category: 'Pau',
    name: 'Red Bean Pau',
    image: redBeanPau,
    width: 986,
    height: 837,
    story: 'Soft, gently sweet and very comforting. Nice with tea when nobody is rushing anywhere.',
    tone: 'beige',
  },
  {
    category: 'Dim Sum',
    name: 'Dragonfruit Dumpling',
    image: dragonfruitDumpling,
    width: 1157,
    height: 1043,
    story: 'Bright on the table and delicate in every bite. Order a basket and watch everybody reach in.',
    tone: 'pink',
  },
] as const;

export default function Menu({
  showPageLink = true,
  limit,
}: {
  showPageLink?: boolean;
  limit?: number;
}) {
  const headingRef = useRef(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();

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
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="joy-section-kicker">What we serve</p>
            <h2 id="menu-title">
              Pick Your Basket<span className="joy-punctuation">!</span>
            </h2>
            <p>
              <span>Five dim sum favourites to start.</span>
              <span>Then five fluffy pau, because got space for one more, right?</span>
            </p>
          </div>

          <div className="joy-menu__actions">
            {showPageLink && (
              <div className="joy-menu__full-menu-wrap">
                <a
                  className="joy-menu__full-menu"
                  href="/menu/"
                  aria-label="View the full JOY Dim Sum menu"
                >
                  View Full Menu
                  <FileText aria-hidden="true" />
                </a>
              </div>
            )}
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

      <section
        ref={trackRef}
        className="joy-menu__track"
        aria-label="Curated dim sum and pau"
        tabIndex={0}
      >
        {featuredFood.slice(0, limit).map((food) => (
          <article
            key={food.name}
            className={'joy-food-card joy-food-card--' + food.tone}
          >
            <div className="joy-food-card__image">
              <img
                src={food.image}
                alt={'A bamboo basket of ' + food.name + ' at JOY Dim Sum Kuala Lumpur'}
                width={food.width}
                height={food.height}
                loading="lazy"
              />
            </div>
            <div className="joy-food-card__copy">
              <h3>{food.name}</h3>
              <p>{food.story}</p>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}
