import {
  ArrowDownRight,
  CalendarDays,
  Clock,
  MapPin,
  MessageCircle,
  Navigation as NavigationIcon,
  Phone,
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import kiaraBayOutlet from '../assets/seo/joy-dim-sum-kiara-bay-outlet-kepong.webp';
import sentulPointOutlet from '../assets/seo/joy-dim-sum-sentul-point-outlet.webp';
import {
  KiaraBayCountdown,
  KiaraBayCountdownHeadline,
} from '../lib/kiaraBay';
import { outlets, socialLinks, type Outlet } from '../lib/siteData';
import FAQSection, { type FaqItem } from '../sections/FAQSection';
import Footer from '../sections/Footer';
import Navigation from '../sections/Navigation';

const sentulFaqs: FaqItem[] = [
  {
    question: 'Where is JOY Dim Sum Sentul Point?',
    answer:
      'We are at AG-26, Sentul Point, Jln Sentul Pasar, Sentul, 51100 Kuala Lumpur.',
  },
  {
    question: 'What are the opening hours?',
    answer: 'JOY Dim Sum Sentul Point is open Monday to Sunday, 10am to 10pm.',
  },
  {
    question: 'Can I reserve a table?',
    answer: (
      <>
        Can! WhatsApp us at{' '}
        <a href={outlets.sentul.whatsappUrl} target="_blank" rel="noreferrer">
          016-610 2688
        </a>{' '}
        with your date, time and number of guests.
      </>
    ),
  },
  {
    question: 'What does the restaurant serve?',
    answer:
      'The JOY table includes dim sum favourites, fluffy pau, savoury dishes, mains and casual dining for sharing.',
  },
  {
    question: 'Was JOY Dim Sum previously Dim Sum House?',
    answer:
      'Yes. JOY Dim Sum Sentul Point was formerly known as Dim Sum House at Sentul Point, so regular guests are still coming to the same familiar location.',
  },
];

const kiaraBayFaqs: FaqItem[] = [
  {
    question: 'Where will JOY Dim Sum Kiara Bay be located?',
    answer:
      'The outlet is at The Beat at Kiara Bay, Karya Bayu Metropolitan, 51, Persiaran Putra Bayu, Kepong, 52100 Kuala Lumpur.',
  },
  {
    question: 'When is the target opening date?',
    answer:
      'The current target opening date is 16 September 2026. It remains a target date until the outlet opening is confirmed.',
  },
  {
    question: 'What will the restaurant serve?',
    answer:
      'JOY Dim Sum Kiara Bay is planned for dim sum, pau and casual dining. Browse the current menu highlights while the team gets the new table ready.',
  },
  {
    question: 'Where can customers get opening updates?',
    answer: (
      <>
        Follow @joydimsum.my on{' '}
        <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>{' '}
        or{' '}
        <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
          Facebook
        </a>{' '}
        for verified Kiara Bay opening updates.
      </>
    ),
  },
];

function VisitDetails({ outlet }: { outlet: Outlet }) {
  return (
    <section className="joy-visit" aria-labelledby={`${outlet.slug}-visit-title`}>
      <div className="joy-section-shell joy-visit__layout">
        <div className="joy-visit__heading">
          <p className="joy-section-kicker">
            {outlet.status === 'open' ? 'Plan your visit' : 'Opening information'}
          </p>
          <h2 id={`${outlet.slug}-visit-title`}>{outlet.shortName} Details</h2>
          <p>
            {outlet.status === 'open'
              ? 'Everything you need before your next basket lands on the table.'
              : 'The latest verified location and target date for our new Kepong table.'}
          </p>
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
          {outlet.hoursLabel && (
            <p>
              <Clock aria-hidden="true" />
              <span>{outlet.hoursLabel}</span>
            </p>
          )}
          {outlet.phone && outlet.whatsappUrl && (
            <a href={outlet.whatsappUrl} target="_blank" rel="noreferrer">
              <Phone aria-hidden="true" />
              <span>{outlet.phone}</span>
            </a>
          )}
          {outlet.openingLabel && (
            <p>
              <CalendarDays aria-hidden="true" />
              <span>{outlet.openingLabel}</span>
            </p>
          )}
          {outlet.status === 'opening-soon' && <KiaraBayCountdown />}
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
  const sentul = outlet.slug === 'sentul-point';
  const h1 = sentul
    ? 'Dim Sum in Sentul, Kuala Lumpur'
    : 'JOY Dim Sum at Kiara Bay, Kepong';
  const otherOutlet = sentul ? outlets.kiaraBay : outlets.sentul;
  const heroImage = sentul ? sentulPointOutlet : kiaraBayOutlet;
  const heroAlt = sentul
    ? 'JOY Dim Sum restaurant and dining tables at Sentul Point, Kuala Lumpur'
    : 'JOY Dim Sum restaurant interior at The Beat, Kiara Bay in Kepong';

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
                { label: 'Outlets', href: '/locations/' },
                { label: outlet.shortName },
              ]}
            />
            <div className="joy-page-hero__grid">
              <div className="joy-page-hero__copy">
                <p className="joy-section-kicker">
                  {sentul ? 'Sentul Point' : 'Opening soon in Kepong'}
                </p>
                <h1 id="outlet-page-title">{h1}</h1>
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
                  {sentul && outlet.whatsappUrl && (
                    <a
                      className="joy-button joy-button--secondary"
                      href={outlet.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle aria-hidden="true" />
                      Reserve on WhatsApp
                    </a>
                  )}
                </div>
              </div>
              <figure className="joy-page-hero__visual joy-page-hero__visual--outlet">
                <img
                  src={heroImage}
                  alt={heroAlt}
                  width={sentul ? 765 : 1920}
                  height={sentul ? 1020 : 1080}
                  fetchPriority="high"
                />
              </figure>
            </div>
          </div>
        </section>

        <VisitDetails outlet={outlet} />

        {sentul && (
          <section className="joy-continuity" aria-labelledby="continuity-title">
            <div className="joy-section-shell joy-continuity__card">
              <p className="joy-section-kicker">A familiar table</p>
              <h2 id="continuity-title">Formerly Dim Sum House</h2>
              <p>
                Know this place as Dim Sum House at Sentul Point? Same familiar
                location, now serving under the JOY Dim Sum name.
              </p>
            </div>
          </section>
        )}

        {!sentul && (
          <section className="joy-social-cta" aria-labelledby="opening-updates-title">
            <div className="joy-section-shell joy-social-cta__card">
              <p className="joy-section-kicker">Opening updates</p>
              <h2 id="opening-updates-title">
                <KiaraBayCountdownHeadline />
              </h2>
              <p>
                Kiara Bay is not open yet. Follow @joydimsum.my for the latest
                verified opening update.
              </p>
              <div className="joy-page-links__actions">
                <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </div>
            </div>
          </section>
        )}

        <FAQSection
          items={sentul ? sentulFaqs : kiaraBayFaqs}
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

        <section className="joy-page-links" aria-labelledby="outlet-next-title">
          <div className="joy-section-shell joy-page-links__inner">
            <div>
              <p className="joy-section-kicker">More JOY</p>
              <h2 id="outlet-next-title">Keep exploring</h2>
              <p>See the menu or check the other JOY table in Kuala Lumpur.</p>
            </div>
            <div className="joy-page-links__actions">
              <a href="/menu/">View Menu</a>
              <a href={otherOutlet.path}>Visit {otherOutlet.shortName}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
