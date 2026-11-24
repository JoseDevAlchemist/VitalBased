import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { PhoneIcon, WhatsAppIcon } from "../components/icons";
import { pageMetadata } from "../lib/metadata";
import { contacts, services, whatsappUrl } from "../lib/site-data";
import { ServiceCard } from "../components/service-card";

export const metadata = pageMetadata("Our services", "Browse all 14 Vital services, including doctor’s home visits, nursing, diagnostics, rehabilitation and ambulance arrangements.");

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="service-catalogue">
        <div className="container">
          <h1>Our services</h1>
          <ul className="catalogue-items">
            {services.map((service) => (
              <li key={service.slug}><ServiceCard service={service} context="catalogue" /></li>
            ))}
          </ul>
          <p className="catalogue-note">For an immediate emergency, contact local emergency services.</p>
        </div>
      </section>

      <section className="contact-band">
        <div className="container contact-band-inner">
          <h2>Contact Vital about a service</h2>
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
