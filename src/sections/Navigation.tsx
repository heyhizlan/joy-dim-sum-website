import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoYellowBeige from '../../assets/Logo Masterfile/joydimsum-duotone-yellow--rgb.svg';
import logoGreen from '../../assets/Logo Masterfile/joydimsum-primary-green--rgb.svg';

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Outlets', href: '#locations' },
  { label: 'Our Story', href: '#about' },
  { label: 'News', href: '#instagram' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileOpen]);

  const onLightSurface = scrolled || mobileOpen;
  const navClassName = [
    'joy-nav',
    scrolled ? 'joy-nav--scrolled' : '',
    mobileOpen ? 'joy-nav--open' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <motion.nav
        className={navClassName}
        aria-label="Primary navigation"
        initial={reduceMotion ? false : { y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="joy-nav__shell">
          <div className="joy-nav__bar">
            <a className="joy-nav__brand" href="#" aria-label="JOY Dim Sum home">
              <img
                src={onLightSurface ? logoGreen : logoYellowBeige}
                alt="JOY Dim Sum Sentul Point and Kiara Bay, Kepong"
                width="1080"
                height="190"
              />
            </a>

            <div className="joy-nav__links">
              {navLinks.map((link) => (
                <a key={link.label} className="joy-nav__link" href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>

            <a className="joy-nav__cta" href="#locations">
              Find an Outlet
            </a>

            <button
              type="button"
              className="joy-nav__menu-button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-controls="mobile-navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            className="joy-mobile-nav"
            initial={reduceMotion ? false : { opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -24 }}
            transition={{ duration: 0.28 }}
          >
            <div className="joy-mobile-nav__links">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduceMotion ? 0 : 0.05 * index }}
                >
                  <span>0{index + 1}</span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
