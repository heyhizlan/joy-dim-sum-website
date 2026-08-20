import { ArrowDownRight, MapPin } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import siewMai from '../assets/seo/joy-dim-sum-siew-mai-menu-highlight.webp';
import Footer from '../sections/Footer';
import Menu from '../sections/Menu';
import MenuTicker from '../sections/MenuTicker';
import Navigation from '../sections/Navigation';

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
                  Start with dim sum favourites, follow with fluffy pau, then
                  make room for savoury dishes, mains, tea and kopi. These are
                  ten current highlights from the JOY table.
                </p>
                <div className="joy-page-hero__actions">
                  <a className="joy-button joy-button--primary" href="#menu">
                    Browse Highlights
                    <ArrowDownRight aria-hidden="true" />
                  </a>
                  <a className="joy-button joy-button--secondary" href="/locations/">
                    <MapPin aria-hidden="true" />
                    Find an Outlet
                  </a>
                </div>
              </div>
              <figure className="joy-page-hero__visual joy-page-hero__visual--yellow">
                <img
                  src={siewMai}
                  alt="JOY Dim Sum siew mai menu highlight"
                  width="1240"
                  height="1750"
                  fetchPriority="high"
                />
              </figure>
            </div>
          </div>
        </section>

        <MenuTicker />
        <Menu showPageLink={false} />

        <section className="joy-page-links" aria-labelledby="menu-next-title">
          <div className="joy-section-shell joy-page-links__inner">
            <div>
              <p className="joy-section-kicker">Pick your table</p>
              <h2 id="menu-next-title">Ready to makan?</h2>
              <p>
                Menu selection and availability can vary. Choose an outlet for
                current visit details and directions.
              </p>
            </div>
            <div className="joy-page-links__actions">
              <a href="/locations/sentul-point/">Visit Sentul Point</a>
              <a href="/locations/kiara-bay-kepong/">See Kiara Bay updates</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
