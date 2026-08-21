import SectionReveal from '../components/SectionReveal';
import About from '../sections/About';
import FAQSection from '../sections/FAQSection';
import Footer from '../sections/Footer';
import Hero from '../sections/Hero';
import Instagram from '../sections/Instagram';
import LocationsSection from '../sections/LocationsSection';
import Menu from '../sections/Menu';
import MenuTicker from '../sections/MenuTicker';
import Navigation from '../sections/Navigation';
import Reviews from '../sections/Reviews';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-joy-cream">
      <Navigation />
      {/* Every other route wraps its content in <main>; the landing page was
          the only one without the landmark. */}
      <main>
        <Hero />
        <MenuTicker />
        <SectionReveal>
          <Menu />
        </SectionReveal>
        <SectionReveal>
          <LocationsSection />
        </SectionReveal>
        <SectionReveal>
          <About />
        </SectionReveal>
        <SectionReveal>
          <FAQSection showPageLink />
        </SectionReveal>
        <SectionReveal>
          <Reviews />
        </SectionReveal>
        <SectionReveal>
          <Instagram />
        </SectionReveal>
      </main>
      <SectionReveal>
        <Footer />
      </SectionReveal>
    </div>
  );
}
