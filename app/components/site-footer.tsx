import Image from "next/image";
import Link from "next/link";
import { contacts, email, siteName, whatsappUrl } from "../lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand footer-brand">
              <Image src="/images/vital-logo.png" alt="" width={52} height={46} />
              <span><strong>Vital</strong><small>Home Based Care &amp; Emergency Services</small></span>
            </Link>
            <p>Home-based healthcare, family support and emergency services.</p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <Link href="/about">About Vital</Link>
            <Link href="/services">Our services</Link>
            <Link href="/contact">Contact us</Link>
            <Link href="/privacy">Privacy</Link>
          </nav>
          <div className="footer-links">
            {contacts.map((contact) => (
              <div className="footer-contact" key={contact.phone}>
                <a href={`tel:${contact.phone}`} aria-label={`Call Vital on ${contact.display}`}>{contact.display}</a>
                <a href={whatsappUrl(contact)} aria-label={`WhatsApp Vital on ${contact.display}`}>WhatsApp</a>
              </div>
            ))}
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
        <div className="footer-bottom">© 2026 {siteName}</div>
      </div>
    </footer>
  );
}
