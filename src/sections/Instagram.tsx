import { useEffect, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, AtSign } from 'lucide-react';

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const instagramPosts = [
  'https://www.instagram.com/p/DeIwwfYDwkC/',
  'https://www.instagram.com/p/DeLl_Nsj49t/',
  'https://www.instagram.com/p/DeigzQ7D5Ec/',
  'https://www.instagram.com/p/De8RVH1P6mf/',
] as const;

export default function Instagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const processEmbeds = () => window.instgrm?.Embeds.process();
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]',
    );

    if (existingScript) {
      if (window.instgrm) processEmbeds();
      else existingScript.addEventListener('load', processEmbeds, { once: true });

      return () => existingScript.removeEventListener('load', processEmbeds);
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.instagram.com/embed.js';
    script.addEventListener('load', processEmbeds, { once: true });
    document.body.appendChild(script);

    return () => script.removeEventListener('load', processEmbeds);
  }, []);

  return (
    <section id="instagram" className="joy-instagram" aria-labelledby="instagram-title">
      <div className="joy-section-shell">
        <motion.div
          ref={ref}
          className="joy-instagram__heading"
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="joy-section-kicker">Latest News</p>
          <h2 id="instagram-title">
            <span>What&apos;s Happening</span>
            <span>at JOY Dim Sum</span>
          </h2>
          <p className="joy-instagram__intro">
            See our latest menu highlights, promotions and outlet updates on Instagram.
          </p>
        </motion.div>

        <div className="joy-instagram__grid">
          {instagramPosts.map((postUrl) => (
            <div className="joy-instagram__embed" key={postUrl}>
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={postUrl}
                data-instgrm-version="14"
              >
                <a href={postUrl} target="_blank" rel="noreferrer">
                  View this post on Instagram
                </a>
              </blockquote>
            </div>
          ))}
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
