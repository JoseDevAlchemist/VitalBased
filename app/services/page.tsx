import Image from "next/image";
import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { services } from "../lib/site-data";

export default function ServicesPage() {
  return <PageShell><section className="page-hero"><div className="container narrow"><p className="eyebrow">Our services</p><h1>Care shaped around your needs.</h1><p>Explore the services Vital can help you enquire about. Availability and arrangements are confirmed directly with the team.</p></div></section><section className="section"><div className="container service-grid service-grid-all">{services.map((s, i) => <Link className="service-card service-card-photo" href={`/services/${s[0]}`} key={s[0]}><div className="card-photo"><Image src={s[3]} alt={s[4]} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><span className="service-number">{String(i + 1).padStart(2, "0")}</span><h2>{s[1]}</h2><p>{s[2]}</p><span className="card-arrow" aria-hidden="true">↗</span></Link>)}</div></section></PageShell>;
}
