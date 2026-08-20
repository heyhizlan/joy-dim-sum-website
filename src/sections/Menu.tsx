import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import harKau from '../assets/seo/joy-dim-sum-har-kau-kuala-lumpur.webp';
import lohMaiKai from '../assets/seo/joy-dim-sum-loh-mai-kai-kuala-lumpur.webp';
import scallopDumpling from '../assets/seo/joy-dim-sum-scallop-dumpling-kuala-lumpur.webp';
import shanghaiDumpling from '../assets/seo/joy-dim-sum-shanghai-dumpling-kuala-lumpur.webp';
import siewMai from '../assets/seo/joy-dim-sum-siew-mai-kuala-lumpur.webp';
import chickenPau from '../assets/seo/joy-dim-sum-chicken-pau-kuala-lumpur.webp';
import gulaMelakaMantau from '../assets/seo/joy-dim-sum-gula-melaka-mantau-kuala-lumpur.webp';
import pandanKayaPau from '../assets/seo/joy-dim-sum-pandan-kaya-pau-kuala-lumpur.webp';
import redBeanPau from '../assets/seo/joy-dim-sum-red-bean-pau-kuala-lumpur.webp';
import saltedEggPau from '../assets/seo/joy-dim-sum-salted-egg-pau-kuala-lumpur.webp';

const featuredFood = [
  {
    category: 'Dim Sum',
    name: 'Siew Mai',
    image: siewMai,
    width: 1184,
    height: 1070,
    story: 'Four in one basket. Who gets the last one? Settle nicely, okay.',
    tone: 'yellow',
  },
  {
    category: 'Dim Sum',
    name: 'Har Kau',
    image: harKau,
    width: 1210,
    height: 1084,
    story: 'Once the Har Kau arrives, everybody suddenly very focused. Best shared while hot, so don\'t wait too long!',
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
    width: 1184,
    height: 1067,
    story: 'Careful with the first bite. Juicy inside! Take your time, the rest can wait awhile.',
    tone: 'yellow',
  },
  {
    category: 'Pau',
    name: 'Chicken Pau',
    image: chickenPau,
    width: 1067,
    height: 908,
    story: 'Soft, warm and filled with savoury chicken. Pull one apart and enjoy first, lah.',
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
    category: 'Pau',
    name: 'Gula Melaka Mantau',
    image: gulaMelakaMantau,
    width: 996,
    height: 848,
    story: 'One big, fluffy spiral with rich Gula Melaka sweetness. Tear, share and makan together. Rules flexible lah.',
    tone: 'pink',
  },
] as const;

export default function Menu() {
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
            <div className="joy-menu__full-menu-wrap">
              <button
                className="joy-menu__full-menu"
                type="button"
                aria-disabled="true"
                title="Full PDF menu coming soon"
              >
                See Full Menu
                <span className="sr-only">(coming soon)</span>
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

      <section
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
