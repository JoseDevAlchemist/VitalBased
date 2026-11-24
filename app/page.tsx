import Image from "next/image";
import Link from "next/link";
import { PageShell } from "./components/page-shell";
import { ServiceCard } from "./components/service-card";
import { PhoneIcon, WhatsAppIcon } from "./components/icons";
import { contacts, photos, services, whatsappUrl } from "./lib/site-data";

const featured = new Set([
  "doctors-home-visits", "24-hour-nursing-care", "physiotherapy",
  "diagnostic-services", "caregiver-support", "post-surgery-care",
]);

const questions = [
  ["Who should I contact about care?", "Call, WhatsApp or email Vital to discuss the care you need."],
  ["How do I check availability?", "Speak to the team to confirm which services are available and agree the arrangements before making plans."],
  ["Can diagnostic tests be done at home?", "It depends on the investigation. Ask the team where it can take place, which equipment is needed and whether you need a referral."],
];

export default function Home() {
  return (
    <PageShell>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>Professional healthcare at home</h1>
            <p className="lede">Vital provides home nursing, doctor’s visits, rehabilitation and support for family caregivers. Speak to our team about the care you need.</p>
            <div className="actions">
              <Link className="button" href="/services">Explore our services</Link>
              <Link className="text-link" href="/contact">Contact Vital</Link>
            </div>
          </div>
          <div className="photo hero-photo">
            <Image src={photos.hero.src} alt={photos.hero.alt} fill preload sizes="(max-width: 720px) 94vw, (max-width: 1400px) 50vw, 660px" />
          </div>
        </div>
      </section>
      <section className="section white service-preview">
        <div className="container">
          <h2>Our services</h2>
          <ul className="catalogue-items">
            {services.filter(({ slug }) => featured.has(slug)).map((service) => (
              <li key={service.slug}><ServiceCard service={service} context="preview" /></li>
            ))}
          </ul>
          <Link className="button" href="/services">View all services</Link>
        </div>
      </section>
      <section className="section sage">
        <div className="container family-grid">
          <div className="photo family-photo">
            <Image src={photos.family.src} alt={photos.family.alt} fill sizes="(max-width: 720px) 94vw, 46vw" />
          </div>
          <div className="family-copy">
            <h2>About Vital</h2>
            <p className="lede">We support patients who need care at home and relatives looking after someone close to them.</p>
            <p>Our services include palliative care, post-surgery support and practical health education for families.</p>
            <Link className="text-link" href="/about">How we work with families</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container editorial-grid">
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            {questions.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}<span aria-hidden="true" /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="contact-band">
        <div className="container contact-band-inner">
          <div>
            <h2>Speak to our team</h2>
            <p>We can discuss service arrangements and availability.</p>
          </div>
          <div className="actions">
            <a className="button" href={`tel:${contacts[0].phone}`}><PhoneIcon /> Call us</a>
            <a className="button secondary" href={whatsappUrl(contacts[0])}><WhatsAppIcon /> WhatsApp</a>
            <Link className="text-link" href="/contact">All contact details</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
