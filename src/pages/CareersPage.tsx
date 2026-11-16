import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDownRight,
  BookOpen,
  Mail,
  ShieldCheck,
  Smile,
  Sprout,
  Utensils,
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionReveal from '../components/SectionReveal';
import MaterialIcon, { type MaterialIconName } from '../components/MaterialIcon';
import Footer from '../sections/Footer';
import Navigation from '../sections/Navigation';
import { WhatsAppIcon } from '../lib/SocialIcons';
import { trackConversion } from '../lib/analytics';
import {
  careerContacts,
  careerEmail,
  careerLanguages,
  careersCopy,
  isCareerLanguage,
  languageButtons,
  roleOrder,
  rolePay,
  type CareerLanguage,
  type CareersCopy,
  type RoleId,
  type Shift,
} from '../lib/careersContent';
import '../careers.css';

const STORAGE_KEY = 'joy-careers-lang';

const roleIcons: Record<RoleId, MaterialIconName> = {
  kitchen: 'cooking',
  service: 'roomService',
  barista: 'localCafe',
};

function Tick() {
  return <MaterialIcon name="check" className="joy-careers-tick" />;
}

const perkIcons = [Utensils, ShieldCheck, BookOpen, Smile, Sprout];

function whatsappHref(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function formatRM(value: number) {
  return `RM${value.toLocaleString('en-MY')}`;
}

function payFor(role: RoleId, shift: Shift, copy: CareersCopy) {
  const pay = rolePay[role][shift];
  if (!pay) return null;
  const amount = pay.max
    ? `${formatRM(pay.min)} – ${formatRM(pay.max)}`
    : copy.formatFrom(formatRM(pay.min));
  return {
    amount,
    unit: shift === 'full' ? copy.roles.perMonth : copy.roles.perHour,
    note: shift === 'full' && pay.max ? copy.roles.experienceNote : null,
  };
}

function trackApply(label: string, url: string) {
  trackConversion('careers_apply_click', { link_url: url, link_text: label });
}

function useCareerLanguage() {
  // The page is prerendered in English. Pick up ?lang= or a saved choice only
  // after hydration so the server and client markup match.
  const [lang, setLang] = useState<CareerLanguage>('en');

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      saved = null;
    }
    const initial = isCareerLanguage(fromUrl) ? fromUrl : isCareerLanguage(saved) ? saved : null;
    if (initial) setLang(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = careersCopy[lang].htmlLang;
  }, [lang]);

  const choose = (next: CareerLanguage) => {
    setLang(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private mode or blocked storage: the choice just won't be remembered.
    }
    // Keep the choice in the address so a shared link opens in that language.
    const url = new URL(window.location.href);
    if (next === 'en') url.searchParams.delete('lang');
    else url.searchParams.set('lang', next);
    window.history.replaceState(null, '', url);
  };

  return [lang, choose] as const;
}

function LanguageSwitch({
  lang,
  onChange,
  label,
}: {
  lang: CareerLanguage;
  onChange: (lang: CareerLanguage) => void;
  label: string;
}) {
  return (
    <div className="joy-careers-lang" role="group" aria-label={label}>
      {careerLanguages.map((option) => (
        <button
          key={option}
          type="button"
          lang={careersCopy[option].htmlLang}
          aria-pressed={lang === option}
          aria-label={languageButtons[option].name}
          onClick={() => onChange(option)}
        >
          {languageButtons[option].label}
        </button>
      ))}
    </div>
  );
}

function StationPlan({ copy }: { copy: CareersCopy }) {
  const roles = copy.roles.items;
  const zones: Array<{ key: string; icon: MaterialIconName; name: string; role: string; href: string }> = [
    { key: 'hot', icon: 'skillet', name: copy.plan.hot, role: roles.kitchen.title, href: '#role-kitchen' },
    { key: 'dimsum', icon: 'cooking', name: copy.plan.dimsum, role: roles.kitchen.title, href: '#role-kitchen' },
    { key: 'beverage', icon: 'localCafe', name: copy.plan.beverage, role: roles.barista.title, href: '#role-barista' },
    { key: 'floor', icon: 'roomService', name: copy.plan.floor, role: roles.service.title, href: '#role-service' },
  ];

  return (
    <figure className="joy-careers-plan">
      <nav className="joy-careers-plan__board" aria-label={copy.plan.label}>
        {zones.map((zone) => (
          <a
            key={zone.key}
            className={`joy-careers-plan__zone joy-careers-plan__zone--${zone.key}`}
            href={zone.href}
          >
            <MaterialIcon name={zone.icon} className="joy-careers-plan__icon" />
            <strong>{zone.name}</strong>
            <span>{zone.role}</span>
          </a>
        ))}
      </nav>
      <figcaption>{copy.plan.caption}</figcaption>
    </figure>
  );
}

function ShiftToggle({
  shift,
  onChange,
  copy,
}: {
  shift: Shift;
  onChange: (shift: Shift) => void;
  copy: CareersCopy;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <div className="joy-careers-shift" role="group" aria-label={copy.roles.shiftLabel}>
      {(['full', 'part'] as const).map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={shift === option}
          onClick={() => onChange(option)}
        >
          {shift === option && (
            <motion.span
              className="joy-careers-shift__thumb"
              layoutId="joy-careers-shift-thumb"
              transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 520, damping: 38 }}
              aria-hidden="true"
            />
          )}
          <span className="joy-careers-shift__label">{copy.roles.shift[option]}</span>
        </button>
      ))}
    </div>
  );
}

function RoleCard({
  role,
  shift,
  copy,
  lang,
}: {
  role: RoleId;
  shift: Shift;
  copy: CareersCopy;
  lang: CareerLanguage;
}) {
  const reduceMotion = useReducedMotion();
  const item = copy.roles.items[role];
  const pay = payFor(role, shift, copy);
  // Kitchen is full-time only, so its button always applies for full-time.
  const applyShift: Shift = pay ? shift : 'full';
  const href = whatsappHref(
    careerContacts[0].wa,
    copy.whatsappMessage(item.title, copy.roles.shift[applyShift]),
  );

  return (
    <article className={`joy-careers-role joy-careers-role--${role}`} id={`role-${role}`} aria-labelledby={`role-${role}-title`}>
      <div className="joy-careers-role__intro">
        <p className="joy-careers-role__station">
          <MaterialIcon name={roleIcons[role]} />
          {item.station}
        </p>
        <h3 id={`role-${role}-title`}>{item.title}</h3>
        <p>{item.summary}</p>
      </div>

      <ul className="joy-careers-role__tasks">
        {item.tasks.map((task) => (
          <li key={task}>
            <Tick />
            {task}
          </li>
        ))}
      </ul>

      <div className="joy-careers-role__pay">
        <p className="joy-careers-role__pay-label">{copy.roles.payLabel}</p>
        <div aria-live="polite" className="joy-careers-role__pay-value">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${shift}-${lang}`}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.18 }}
            >
              {pay ? (
                <>
                  <p className="joy-careers-role__amount">
                    {pay.amount} <span>{pay.unit}</span>
                  </p>
                  {pay.note && <p className="joy-careers-role__note">{pay.note}</p>}
                </>
              ) : (
                <p className="joy-careers-role__closed">{copy.roles.fullTimeOnly}</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <a
          className="joy-button joy-button--green joy-careers-role__apply"
          href={href}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackApply(`Careers role: ${role} (${applyShift})`, href)}
        >
          <WhatsAppIcon />
          {copy.roles.apply}
        </a>
      </div>
    </article>
  );
}

export default function CareersPage() {
  const [lang, setLang] = useCareerLanguage();
  const [shift, setShift] = useState<Shift>('full');
  const copy = careersCopy[lang];
  const generalHref = whatsappHref(careerContacts[0].wa, copy.whatsappMessage());
  const mailHref = `mailto:${careerEmail}?subject=${encodeURIComponent(copy.apply.emailSubject)}`;

  return (
    <div className="min-h-screen bg-joy-cream">
      <Navigation />
      <main className="joy-careers" lang={copy.htmlLang}>
        <section className="joy-page-hero joy-careers-hero" aria-labelledby="careers-title">
          <div className="joy-page-hero__pattern" aria-hidden="true" />
          <div className="joy-section-shell">
            <div className="joy-careers-hero__top">
              <Breadcrumbs
                light
                items={[
                  { label: copy.breadcrumbHome, href: '/' },
                  { label: copy.breadcrumbCareers },
                ]}
              />
              <LanguageSwitch lang={lang} onChange={setLang} label={copy.switchLabel} />
            </div>

            <div className="joy-page-hero__grid joy-careers-hero__grid">
              <div className="joy-page-hero__copy joy-careers-hero__copy">
                <p className="joy-section-kicker">{copy.hero.kicker}</p>
                <h1 id="careers-title">
                  <span>{copy.hero.title[0]}</span>
                  <span>
                    {copy.hero.title[1].slice(0, -1)}
                    <i className="joy-careers-hero__exclamation">{copy.hero.title[1].slice(-1)}</i>
                  </span>
                </h1>
                <p>{copy.hero.lede}</p>
                <div className="joy-page-hero__actions">
                  <a
                    className="joy-button joy-button--primary"
                    href={generalHref}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackApply('Careers hero WhatsApp', generalHref)}
                  >
                    <WhatsAppIcon />
                    {copy.hero.applyCta}
                  </a>
                  <a className="joy-button joy-button--secondary" href="#open-roles">
                    {copy.hero.rolesCta}
                    <ArrowDownRight aria-hidden="true" />
                  </a>
                </div>
              </div>

              <SectionReveal delay={0.15}>
                <StationPlan copy={copy} />
              </SectionReveal>
            </div>
          </div>
        </section>

        <section className="joy-careers-roles" id="open-roles" aria-labelledby="open-roles-title">
          <div className="joy-section-shell">
            <SectionReveal>
            <div className="joy-careers-roles__heading">
              <div>
                <p className="joy-section-kicker">{copy.roles.kicker}</p>
                <h2 id="open-roles-title">{copy.roles.heading}</h2>
                <p>{copy.roles.intro}</p>
              </div>
              <ShiftToggle shift={shift} onChange={setShift} copy={copy} />
            </div>
            </SectionReveal>

            <div className="joy-careers-roles__list">
              {roleOrder.map((role) => (
                <SectionReveal key={role}>
                  <RoleCard role={role} shift={shift} copy={copy} lang={lang} />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="joy-careers-team" aria-labelledby="perks-title">
          <div className="joy-section-shell">
            <div className="joy-careers-team__grid">
              <SectionReveal>
              <div className="joy-careers-team__card">
                <h2 id="perks-title">{copy.perks.heading}</h2>
                <ul className="joy-careers-perks">
                  {copy.perks.items.map((perk, index) => {
                    const Icon = perkIcons[index];
                    return (
                      <li key={perk}>
                        <span aria-hidden="true">
                          <Icon />
                        </span>
                        {perk}
                      </li>
                    );
                  })}
                </ul>
              </div>
              </SectionReveal>
              <SectionReveal delay={0.12}>
              <div className="joy-careers-team__card">
                <h2 id="who-title">{copy.who.heading}</h2>
                <ul className="joy-careers-who">
                  {copy.who.items.map((item) => (
                    <li key={item}>
                      <Tick />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="joy-careers-who__note">{copy.who.note}</p>
              </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        <SectionReveal>
        <section className="joy-page-links joy-page-links--solid joy-careers-apply" id="apply" aria-labelledby="apply-title">
          <div className="joy-section-shell joy-careers-apply__inner">
            <div>
              <p className="joy-section-kicker">{copy.apply.kicker}</p>
              <h2 id="apply-title">{copy.apply.heading}</h2>
              <p className="joy-careers-apply__body">{copy.apply.body}</p>
              <ul className="joy-careers-apply__checklist">
                {copy.apply.checklist.map((item) => (
                  <li key={item}>
                    <Tick />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="joy-careers-apply__contacts">
              {careerContacts.map((contact) => {
                const href = whatsappHref(contact.wa, copy.whatsappMessage());
                return (
                  <a
                    key={contact.name}
                    className="joy-careers-contact"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackApply(`Careers contact: ${contact.name}`, href)}
                  >
                    <WhatsAppIcon />
                    <span>
                      <strong>
                        {copy.apply.whatsappPrefix} {contact.name}
                      </strong>
                      <span>{contact.phone}</span>
                    </span>
                  </a>
                );
              })}
              <p className="joy-careers-apply__email">
                <Mail aria-hidden="true" />
                <span>
                  {copy.apply.emailLead}{' '}
                  <a href={mailHref} onClick={() => trackApply('Careers email', mailHref)}>
                    {careerEmail}
                  </a>
                </span>
              </p>
            </div>
          </div>
        </section>
        </SectionReveal>
      </main>
      <SectionReveal>
        <Footer />
      </SectionReveal>
    </div>
  );
}
