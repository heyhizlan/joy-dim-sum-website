import {
  ArrowDownRight,
  Clock,
  MapPin,
  MessageCircle,
  Navigation as NavigationIcon,
  Phone,
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import kiaraBayStorefront from '../../assets/kiarabay-gallery/joy-dim-sum-kiara-bay-kepong-storefront-1.webp';
import { type Outlet } from '../lib/siteData';
import FAQSection, { type FaqItem } from '../sections/FAQSection';
import Footer from '../sections/Footer';
import Navigation from '../sections/Navigation';

const kiaraBayFaqs: FaqItem[] = [
  {
    question: 'Where is JOY Dim Sum Kiara Bay?',
    answer:
      'We are at G-27, Karya Bayu Metropolitan, 51, Persiaran Putra Bayu, Kiara Bay, Kepong, 52100 Kuala Lumpur.',
  },
  {
    question: 'What are the opening hours?',
    answer: 'JOY Dim Sum Kiara Bay is open Monday to Sunday, from 8am to 11pm.',
  },
  {
    question: 'Can I reserve a table?',
    answer: 'Yes. Message the Kiara Bay team on WhatsApp with your preferred date, time and number of guests.',
  },
  {
    question: 'What does the restaurant serve?',
    answer:
      'The JOY table includes dim sum favourites such as steamed dumplings, fluffy pau, savoury dishes, mains and casual dining for sharing.',
  },
];

function VisitDetails({ outlet }: { outlet: Outlet }) {
  return (
    <section className="joy-visit" aria-labelledby={`${outlet.slug}-visit-title`}>
      <div className="joy-section-shell joy-visit__layout">
        <div className="joy-visit__heading">
          <p className="joy-section-kicker">Plan your visit</p>
          <h2 id={`${outlet.slug}-visit-title`}>{outlet.shortName} Details</h2>
          <p>Everything you need before your next basket lands on the table.</p>
        </div>

        <article className="joy-visit__card">
          <h3>{outlet.schemaName}</h3>
          <a href={outlet.mapsUrl} target="_blank" rel="noreferrer">
            <MapPin aria-hidden="true" />
            <span>
              {outlet.addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </span>
          </a>
          <p>
            <Clock aria-hidden="true" />
            <span>{outlet.hoursLabel}</span>
          </p>
          <a href={outlet.whatsappUrl} target="_blank" rel="noreferrer">
            <Phone aria-hidden="true" />
            <span>{outlet.phone}</span>
          </a>
          <a className="joy-outlet-card__button" href={outlet.mapsUrl} target="_blank" rel="noreferrer">
            <NavigationIcon aria-hidden="true" />
            Get Directions
          </a>
        </article>
      </div>
    </section>
  );
}

export default function OutletPage({ outlet }: { outlet: Outlet }) {
  return (
    <div className="min-h-screen bg-joy-cream">
      <Navigation />
      <main>
        <section className="joy-page-hero" aria-labelledby="outlet-page-title">
          <div className="joy-page-hero__pattern" aria-hidden="true" />
          <div className="joy-section-shell">
            <Breadcrumbs
              light
              items={[
                { label: 'Home', href: '/' },
                { label: 'Outlet', href: '/locations/' },
                { label: outlet.shortName },
              ]}
            />
            <div className="joy-page-hero__grid">
              <div className="joy-page-hero__copy">
                <p className="joy-section-kicker">Kiara Bay, Kepong</p>
                <h1 id="outlet-page-title">JOY Dim Sum at Kiara Bay</h1>
                <p>{outlet.pageIntroduction}</p>
                <div className="joy-page-hero__actions">
                  <a className="joy-button joy-button--primary" href="/menu/">
                    View Menu
                    <ArrowDownRight aria-hidden="true" />
                  </a>
                  <a
                    className="joy-button joy-button--secondary"
                    href={outlet.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MapPin aria-hidden="true" />
                    Get Directions
                  </a>
                  <a
                    className="joy-button joy-button--secondary"
                    href={outlet.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle aria-hidden="true" />
                    Reserve on WhatsApp
                  </a>
                </div>
              </div>
              <figure className="joy-page-hero__visual joy-page-hero__visual--outlet">
                <img
                  src={kiaraBayStorefront}
                  alt="JOY Dim Sum Kiara Bay storefront at Karya Bayu Metropolitan in Kepong"
                  width="1800"
                  height="1800"
                  fetchPriority="high"
                />
              </figure>
            </div>
          </div>
        </section>

        <VisitDetails outlet={outlet} />

        <FAQSection
          items={kiaraBayFaqs}
          sectionId={`${outlet.slug}-faq`}
          kicker={`${outlet.shortName} FAQs`}
          title={
            <>
              <span>Before you</span>
              <span>drop by</span>
            </>
          }
          plain
        />

        <section className="joy-page-links joy-page-links--solid" aria-labelledby="outlet-next-title">
          <div className="joy-section-shell joy-page-links__inner">
            <div>
              <p className="joy-section-kicker">More JOY</p>
              <h2 id="outlet-next-title">Keep exploring</h2>
              <p>See the menu or find us on Google Maps.</p>
            </div>
            <div className="joy-page-links__actions">
              <a href="/menu/">View Menu</a>
              <a href={outlet.mapsUrl} target="_blank" rel="noreferrer">Get Directions</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
