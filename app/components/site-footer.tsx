import Image from "next/image";
import Link from "next/link";
import { contacts, whatsappUrl } from "@/app/lib/site-data";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-intro"><Link href="/" className="footer-brand"><Image src="/images/vital-logo.png" alt="Vital logo" width={48} height={44} /><span><strong>Vital</strong><small>Home Based Care &amp; Emergency Services</small></span></Link><p>Compassionate care, in the comfort of your home.</p></div>
      <div><p className="eyebrow">Explore</p><div className="footer-links"><Link href="/about">About Vital</Link><Link href="/services">Our services</Link><Link href="/contact">Contact the team</Link><Link href="/privacy">Privacy</Link></div></div>
      <div><p className="eyebrow">Talk to us</p><div className="footer-links"><a href={`tel:${contacts[0].phone}`}>Felix · {contacts[0].display}</a><a href={`tel:${contacts[1].phone}`}>Nelius · {contacts[1].display}</a><a href="mailto:vital2HBC@gmail.com">vital2HBC@gmail.com</a><a href={whatsappUrl()}>WhatsApp Felix ↗</a></div></div>
    </div>
    <div className="container footer-bottom"><span>© 2026 Vital Home Based Care &amp; Emergency Services</span><span>Direct enquiries by phone, WhatsApp or email</span></div>
  </footer>;
}
