import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import menuCover from '../../assets/menu/joy-dim-sum-menu-cover.webp';
import menuPages0203 from '../../assets/menu/joy-dim-sum-menu-pages-02-03.webp';
import menuPages0405 from '../../assets/menu/joy-dim-sum-menu-pages-04-05.webp';
import menuPages0607 from '../../assets/menu/joy-dim-sum-menu-pages-06-07.webp';
import menuPages0809 from '../../assets/menu/joy-dim-sum-menu-pages-08-09.webp';
import menuPages1011 from '../../assets/menu/joy-dim-sum-menu-pages-10-11.webp';
import menuBackCover from '../../assets/menu/joy-dim-sum-menu-back-cover.webp';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../sections/Footer';
import Navigation from '../sections/Navigation';

const menuSpreads = [
  { image: menuCover, label: 'Front cover', alt: 'Front cover of the JOY Dim Sum full menu' },
  { image: menuPages0203, label: 'Pages 2–3', alt: 'JOY Dim Sum full menu pages 2 and 3' },
  { image: menuPages0405, label: 'Pages 4–5', alt: 'JOY Dim Sum full menu pages 4 and 5' },
  { image: menuPages0607, label: 'Pages 6–7', alt: 'JOY Dim Sum full menu pages 6 and 7' },
  { image: menuPages0809, label: 'Pages 8–9', alt: 'JOY Dim Sum full menu pages 8 and 9' },
  { image: menuPages1011, label: 'Pages 10–11', alt: 'JOY Dim Sum full menu pages 10 and 11' },
  { image: menuBackCover, label: 'Back cover', alt: 'Back cover of the JOY Dim Sum full menu' },
] as const;

export default function FullMenuPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const pointerStartX = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const lastIndex = menuSpreads.length - 1;

  const changeSpread = useCallback((step: -1 | 1) => {
    setDirection(step);
    setActiveIndex((current) => Math.max(0, Math.min(lastIndex, current + step)));
  }, [lastIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        changeSpread(-1);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        changeSpread(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [changeSpread]);

  useEffect(() => {
    [activeIndex - 1, activeIndex + 1].forEach((index) => {
      const spread = menuSpreads[index];
      if (!spread) return;
      const image = new Image();
      image.src = spread.image;
    });
  }, [activeIndex]);

  const activeSpread = menuSpreads[activeIndex];

  return (
    <div className="min-h-screen bg-joy-green">
      <Navigation />
      <main className="joy-full-menu">
        <div className="joy-full-menu__pattern" aria-hidden="true" />
        <div className="joy-section-shell joy-full-menu__shell">
          <Breadcrumbs
            light
            items={[
              { label: 'Home', href: '/' },
              { label: 'Menu Highlights', href: '/menu/' },
              { label: 'Full Menu' },
            ]}
          />

          <header className="joy-full-menu__heading">
            <div>
              <p className="joy-section-kicker">The full spread</p>
              <h1>JOY Dim Sum Menu</h1>
            </div>
            <p>
              Flip through every spread using the yellow arrows. You can also
              swipe on touchscreens or use the left and right arrow keys.
            </p>
          </header>

          <section className="joy-full-menu__viewer" aria-label="Full menu viewer">
            <div className="joy-full-menu__status" aria-live="polite" aria-atomic="true">
              <span>{activeSpread.label}</span>
              <span>Spread {activeIndex + 1} of {menuSpreads.length}</span>
            </div>

            <div
              className="joy-full-menu__stage"
              onPointerDown={(event) => {
                pointerStartX.current = event.clientX;
              }}
              onPointerUp={(event) => {
                if (pointerStartX.current === null) return;
                const distance = event.clientX - pointerStartX.current;
                pointerStartX.current = null;
                if (Math.abs(distance) < 45) return;
                changeSpread(distance > 0 ? -1 : 1);
              }}
              onPointerCancel={() => {
                pointerStartX.current = null;
              }}
            >
              <div className="joy-full-menu__spread-frame">
                <AnimatePresence initial={false} mode="wait" custom={direction}>
                  <motion.figure
                    key={activeSpread.image}
                    custom={direction}
                    initial={reduceMotion ? false : { opacity: 0, x: direction * 56 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -56 }}
                    transition={{ duration: reduceMotion ? 0.12 : 0.32, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <img
                      src={activeSpread.image}
                      alt={activeSpread.alt}
                      loading="eager"
                      fetchPriority={activeIndex === 0 ? 'high' : 'auto'}
                    />
                    <figcaption className="sr-only">{activeSpread.label}</figcaption>
                  </motion.figure>
                </AnimatePresence>
              </div>
            </div>

            <div className="joy-full-menu__controls" aria-label="Menu spread controls">
              <button
                type="button"
                onClick={() => changeSpread(-1)}
                disabled={activeIndex === 0}
                aria-label="View previous menu spread"
              >
                <ArrowLeft aria-hidden="true" />
                Previous
              </button>
              <button
                type="button"
                onClick={() => changeSpread(1)}
                disabled={activeIndex === lastIndex}
                aria-label="View next menu spread"
              >
                Next
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
