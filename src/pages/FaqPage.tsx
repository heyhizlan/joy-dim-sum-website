import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../sections/Footer';
import FAQSection, { allFaqs } from '../sections/FAQSection';
import Navigation from '../sections/Navigation';

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-joy-cream">
      <Navigation lightOnLoad />
      <main className="joy-faq-page">
        <div className="joy-section-shell joy-faq-page__breadcrumbs">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'FAQs' }]}
          />
        </div>
        <FAQSection
          items={allFaqs}
          sectionId="faqs"
          kicker="Frequently Asked Questions"
          title={
            <>
              <span>Got questions?</span>
              <span>
                Kita Settle<span className="joy-punctuation">!</span>
              </span>
            </>
          }
          page
        />
      </main>
      <Footer />
    </div>
  );
}
