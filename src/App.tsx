import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Menu from './sections/Menu';
import Locations from './sections/Locations';
import About from './sections/About';
import FAQ from './sections/FAQ';
import Reviews from './sections/Reviews';
import Instagram from './sections/Instagram';
import Footer from './sections/Footer';
import SectionReveal from './components/SectionReveal';

function App() {
  return (
    <div className="min-h-screen bg-joy-cream">
      <Navigation />
      <Hero />
      <SectionReveal>
        <Menu />
      </SectionReveal>
      <SectionReveal>
        <Locations />
      </SectionReveal>
      <SectionReveal>
        <About />
      </SectionReveal>
      <SectionReveal>
        <FAQ />
      </SectionReveal>
      <SectionReveal>
        <Reviews />
      </SectionReveal>
      <SectionReveal>
        <Instagram />
      </SectionReveal>
      <SectionReveal>
        <Footer />
      </SectionReveal>
    </div>
  );
}

export default App;
