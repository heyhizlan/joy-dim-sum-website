import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDownRight,
  BookOpen,
  Check,
  Coffee,
  CookingPot,
  HandPlatter,
  Mail,
  ShieldCheck,
  Smile,
  Sprout,
  Utensils,
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
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
import siewMai from '../assets/seo/joy-dim-sum-siew-mai-kuala-lumpur.webp';
import '../careers.css';

const STORAGE_KEY = 'joy-careers-lang';

const roleIcons: Record<RoleId, typeof CookingPot> = {
  kitchen: CookingPot,
  service: HandPlatter,
  barista: Coffee,
};

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
  return (
    <figure className="joy-careers-plan">
      <nav className="joy-careers-plan__board" aria-label={copy.plan.label}>
        <a className="joy-careers-plan__zone joy-careers-plan__zone--hot" href="#role-kitchen">
          <CookingPot aria-hidden="true" />
          <strong>{copy.plan.hot}</strong>
          <span>{roles.kitchen.title}</span>
        </a>
        <a className="joy-careers-plan__zone joy-careers-plan__zone--dimsum" href="#role-kitchen">
          <img src={siewMai} alt="" width="1184" height="1070" aria-hidden="true" />
          <strong>{copy.plan.dimsum}</strong>
          <span>{roles.kitchen.title}</span>
        </a>
        <a className="joy-careers-plan__zone joy-careers-plan__zone--beverage" href="#role-barista">
          <Coffee aria-hidden="true" />
          <strong>{copy.plan.beverage}</strong>
          <span>{roles.barista.title}</span>
        </a>
        <a className="joy-careers-plan__zone joy-careers-plan__zone--floor" href="#role-service">
          <span className="joy-careers-plan__tables" aria-hidden="true">
            {Array.from({ length: 6 }, (_, index) => (
              <i key={index} />
            ))}
          </span>
          <strong>{copy.plan.floor}</strong>
          <span>{roles.service.title}</span>
        </a>
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
  const Icon = roleIcons[role];
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
          <Icon aria-hidden="true" />
          {item.station}
        </p>
        <h3 id={`role-${role}-title`}>{item.title}</h3>
        <p>{item.summary}</p>
      </div>

      <ul className="joy-careers-role__tasks">
        {item.tasks.map((task) => (
          <li key={task}>
            <Check aria-hidden="true" />
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
                  <span>{copy.hero.title[1]}</span>
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

              <StationPlan copy={copy} />
            </div>
          </div>
        </section>

        <section className="joy-careers-roles" id="open-roles" aria-labelledby="open-roles-title">
          <div className="joy-section-shell">
            <div className="joy-careers-roles__heading">
              <div>
                <h2 id="open-roles-title">{copy.roles.heading}</h2>
                <p>{copy.roles.intro}</p>
              </div>
              <ShiftToggle shift={shift} onChange={setShift} copy={copy} />
            </div>

            <div className="joy-careers-roles__list">
              {roleOrder.map((role) => (
                <RoleCard key={role} role={role} shift={shift} copy={copy} lang={lang} />
              ))}
            </div>
          </div>
        </section>

        <section className="joy-careers-team" aria-labelledby="perks-title">
          <div className="joy-section-shell">
            <div className="joy-careers-team__card">
              <div>
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
              <div>
                <h2 id="who-title">{copy.who.heading}</h2>
                <ul className="joy-careers-who">
                  {copy.who.items.map((item) => (
                    <li key={item}>
                      <Check aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="joy-careers-who__note">{copy.who.note}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="joy-page-links joy-careers-apply" id="apply" aria-labelledby="apply-title">
          <div className="joy-section-shell joy-careers-apply__inner">
            <div>
              <p className="joy-section-kicker">{copy.apply.kicker}</p>
              <h2 id="apply-title">{copy.apply.heading}</h2>
              <p className="joy-careers-apply__body">{copy.apply.body}</p>
              <ul className="joy-careers-apply__checklist">
                {copy.apply.checklist.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
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
      </main>
      <Footer />
    </div>
  );
}
