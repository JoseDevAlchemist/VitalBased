import { PageShell } from "../components/page-shell";
import { pageMetadata } from "../lib/metadata";
import { email } from "../lib/site-data";

export const metadata = pageMetadata("Privacy", "Read how Vital handles information you share when you call, email or send a WhatsApp message.");

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="section">
        <div className="container editorial-grid">
          <h1>Privacy</h1>
          <div className="prose legal">
            <h2>Information you share with Vital</h2>
            <p>When you call, email or message Vital, the team uses the information you provide to respond to your enquiry. Please keep medical records and detailed health information out of initial messages.</p>
            <h2>How the website works</h2>
            <p>The website provides information and links to phone, email and WhatsApp. It has no patient portal, booking form, payments or analytics integration.</p>
            <h2>Privacy questions</h2>
            <p>Email <a className="text-link" href={`mailto:${email}`}>{email}</a> to ask how Vital handles your information.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
