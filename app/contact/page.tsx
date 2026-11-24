import { PageShell } from "../components/page-shell";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "../components/icons";
import { pageMetadata } from "../lib/metadata";
import { contacts, email, whatsappUrl } from "../lib/site-data";

export const metadata = pageMetadata("Contact Vital", "Contact Vital by phone, WhatsApp or email.");

export default function ContactPage() {
  return (
    <PageShell>
      <section className="section contact-section">
        <div className="container contact-layout">
          <div>
            <h1>Contact us</h1>
            <p className="lede">Call, WhatsApp or email us to discuss care or check availability.</p>
          </div>
          <div className="contact-directory">
            {contacts.map((contact) => (
              <section className="contact-row" key={contact.phone}>
                <h2>
                  <a className="contact-number" href={`tel:${contact.phone}`} aria-label={`Call Vital on ${contact.display}`}>
                    <PhoneIcon className="contact-icon-blue" /> {contact.display}
                  </a>
                </h2>
                <div className="actions">
                  <a className="text-link" href={whatsappUrl(contact)} aria-label={`WhatsApp Vital on ${contact.display}`}>
                    <WhatsAppIcon /> WhatsApp
                  </a>
                </div>
              </section>
            ))}
            <section className="contact-row">
              <h2>Email</h2>
              <a className="text-link" href={`mailto:${email}`}><MailIcon className="contact-icon-blue" /> {email}</a>
            </section>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
