import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import menuOne from '../../assets/menu-gallery/joy-dim-sum-menu-gallery-1.webp';
import menuTwo from '../../assets/menu-gallery/joy-dim-sum-menu-gallery-2.webp';
import menuThree from '../../assets/menu-gallery/joy-dim-sum-menu-gallery-3.webp';
import menuFour from '../../assets/menu-gallery/joy-dim-sum-menu-gallery-4.webp';

const slides = [
  {
    src: menuOne,
    alt: 'JOY Dim Sum menu highlight featuring steamed dim sum in a bamboo basket',
  },
  {
    src: menuTwo,
    alt: 'JOY Dim Sum menu highlight featuring colourful dumplings',
  },
  {
    src: menuThree,
    alt: 'JOY Dim Sum menu highlight featuring freshly prepared dishes',
  },
  {
    src: menuFour,
    alt: 'JOY Dim Sum menu highlight from the Kiara Bay menu gallery',
  },
] as const;

export default function MenuHeroCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ x: number; scrollLeft: number } | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const showSlide = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: track.clientWidth * index, behavior });
    setActiveSlide(index);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;

    const interval = window.setInterval(() => {
      showSlide((activeSlide + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [activeSlide, paused, reduceMotion, showSlide]);

  return (
    <figure
      className="joy-page-hero__visual joy-page-hero__visual--carousel"
      aria-label="JOY Dim Sum menu image carousel"
    >
      <div
        ref={trackRef}
        className="joy-menu-hero-carousel__track"
        onScroll={(event) => {
          const track = event.currentTarget;
          if (!track.clientWidth) return;
          setActiveSlide(
            Math.min(
              slides.length - 1,
              Math.max(0, Math.round(track.scrollLeft / track.clientWidth)),
            ),
          );
        }}
        onPointerDown={(event) => {
          setPaused(true);
          if (event.pointerType !== 'mouse') return;
          event.currentTarget.setPointerCapture(event.pointerId);
          dragRef.current = {
            x: event.clientX,
            scrollLeft: event.currentTarget.scrollLeft,
          };
        }}
        onPointerMove={(event) => {
          if (event.pointerType !== 'mouse' || !dragRef.current) return;
          event.preventDefault();
          event.currentTarget.scrollLeft =
            dragRef.current.scrollLeft - (event.clientX - dragRef.current.x);
        }}
        onPointerUp={(event) => {
          if (event.pointerType === 'mouse' && dragRef.current) {
            dragRef.current = null;
            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
              event.currentTarget.releasePointerCapture(event.pointerId);
            }
            showSlide(
              Math.round(event.currentTarget.scrollLeft / event.currentTarget.clientWidth),
            );
          }
          setPaused(false);
        }}
        onPointerCancel={(event) => {
          dragRef.current = null;
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
          setPaused(false);
        }}
      >
        {slides.map((slide, index) => (
          <div className="joy-menu-hero-carousel__slide" key={slide.src}>
            <img
              src={slide.src}
              alt={slide.alt}
              width="1800"
              height="1800"
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              draggable="false"
            />
          </div>
        ))}
      </div>
      <div className="joy-menu-hero-carousel__dots" aria-label="Choose a menu photo">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={index === activeSlide ? 'is-active' : ''}
            aria-label={`Show menu photo ${index + 1} of ${slides.length}`}
            aria-current={index === activeSlide ? 'true' : undefined}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
    </figure>
  );
}
