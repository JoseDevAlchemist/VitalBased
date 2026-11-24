import Image from "next/image";
import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { pageMetadata } from "../lib/metadata";
import { photos } from "../lib/site-data";

export const metadata = pageMetadata("About Vital", "Learn how Vital supports patients receiving care at home and the relatives who care for them.");

export default function AboutPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container about-grid">
          <div>
            <h1>About Vital</h1>
            <p className="lede">Vital Home Based Care &amp; Emergency Services provides healthcare and practical support for patients and families.</p>
            <p>Some households need a single doctor’s visit or a test. Others need nursing over a longer period, support after discharge or help caring for a relative. Vital also lists ambulance services and community outreach.</p>
            <Link className="text-link" href="/services">Browse our services</Link>
          </div>
          <div className="photo about-photo">
            <Image src={photos.family.src} alt={photos.family.alt} fill preload sizes="(max-width: 720px) 94vw, 45vw" />
          </div>
        </div>
      </section>
      <section className="section sage">
        <div className="container editorial-grid">
          <h2>Planning care with families</h2>
          <div className="prose">
            <p>Tell us what the patient needs, what the family already manages at home and when support is needed. If there is an existing care plan or discharge guidance, mention it when you call.</p>
            <p>Speak directly with the team to confirm availability and what can be arranged. For tests and diagnostics, check where the service takes place before making plans.</p>
            <Link className="button" href="/contact">Contact Vital</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
