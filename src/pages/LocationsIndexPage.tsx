import Footer from '../sections/Footer';
import LocationsSection from '../sections/LocationsSection';
import Navigation from '../sections/Navigation';

export default function LocationsIndexPage() {
  return (
    <div className="min-h-screen bg-joy-cream">
      <Navigation lightOnLoad />
      <main>
        <LocationsSection page />
      </main>
      <Footer />
    </div>
  );
}
