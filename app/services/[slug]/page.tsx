import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "../../components/page-shell";
import { contacts, services, whatsappUrl } from "../../lib/site-data";

export function generateStaticParams() { return services.map(s => ({ slug: s[0] })); }

export const instant = false;

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(s => s[0] === slug);
  if (!service) notFound();
  return <PageShell><section className="detail-hero"><div className="container detail-grid"><div><Link className="back-link" href="/services">← All services</Link><p className="eyebrow">Vital service</p><h1>{service[1]}</h1><p className="detail-lede">{service[2]}</p><div className="hero-actions"><a className="button" href={`tel:${contacts[0].phone}`}>Call to discuss availability <span>↗</span></a><a className="text-link" href={whatsappUrl()}>WhatsApp enquiry <span>→</span></a></div></div><div className="detail-photo"><Image src={service[3]} alt={service[4]} fill priority sizes="(max-width: 850px) 100vw, 42vw" /></div></div></section><section className="section detail-content"><div className="container detail-content-grid"><div><p className="eyebrow">A considered next step</p><h2>Let’s understand what support looks like for you.</h2></div><div><p>Every enquiry is different. Tell the team the service you are interested in and the kind of support you are exploring. We will help clarify arrangements and availability.</p><p>For diagnostic services, equipment and ambulance enquiries, please confirm the service details directly with the team before making plans.</p><Link className="text-link" href="/contact">Contact Vital <span>→</span></Link></div></div></section></PageShell>;
}
