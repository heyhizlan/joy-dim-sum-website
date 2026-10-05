import { ArrowDownRight, FileText } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import MenuHeroCarousel from '../components/MenuHeroCarousel';
import Footer from '../sections/Footer';
import Menu from '../sections/Menu';
import MenuTicker from '../sections/MenuTicker';
import Navigation from '../sections/Navigation';
import TextMenu from '../sections/TextMenu';

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-joy-cream">
      <Navigation />
      <main>
        <section className="joy-page-hero" aria-labelledby="menu-page-title">
          <div className="joy-page-hero__pattern" aria-hidden="true" />
          <div className="joy-section-shell">
            <Breadcrumbs
              light
              items={[{ label: 'Home', href: '/' }, { label: 'Menu' }]}
            />
            <div className="joy-page-hero__grid">
              <div className="joy-page-hero__copy">
                <p className="joy-section-kicker">Menu highlights</p>
                <h1 id="menu-page-title">JOY Dim Sum Menu</h1>
                <p>
                  Start with dim sum favourites and steamed dumplings, follow
                  with fluffy pau, then make room for savoury dishes, mains,
                  tea and kopi. These are ten current highlights from the JOY
                  table.
                </p>
                <div className="joy-page-hero__actions">
                  <a
                    className="joy-button joy-button--primary"
                    href="#full-text-menu"
                  >
                    View Full Menu
                    <FileText aria-hidden="true" />
                  </a>
                  <a className="joy-button joy-button--secondary" href="#menu">
                    Browse Highlights
                    <ArrowDownRight aria-hidden="true" />
                  </a>
                </div>
              </div>
              <MenuHeroCarousel />
            </div>
          </div>
        </section>

        <MenuTicker />
        <Menu showPageLink={false} />
        <TextMenu />

        <section className="joy-page-links joy-page-links--solid" aria-labelledby="menu-next-title">
          <div className="joy-section-shell joy-page-links__inner">
            <div>
              <p className="joy-section-kicker">Pick your table</p>
              <h2 id="menu-next-title">Ready to makan?</h2>
              <p>
                Menu selection and availability can vary. Check our Kiara Bay
                outlet for current visit details and directions.
              </p>
            </div>
            <div className="joy-page-links__actions">
              <a href="/locations/kiara-bay-kepong/">Visit Kiara Bay</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
