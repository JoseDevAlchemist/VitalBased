import Image from "next/image";
import Link from "next/link";
import { PageShell } from "../components/page-shell";

export default function AboutPage() {
  return <PageShell><section className="page-hero"><div className="container narrow"><p className="eyebrow">About Vital</p><h1>Care that sees the whole person.</h1><p>Vital Home Based Care &amp; Emergency Services helps families explore home-based healthcare and emergency-service enquiries with clarity and compassion.</p></div></section><section className="section"><div className="container about-grid"><div className="about-photo"><Image src="/images/family-support.jpg" alt="Black African parent and child sharing a healthy routine at home" fill sizes="(max-width: 850px) 100vw, 50vw" /></div><div className="about-copy"><p className="eyebrow">Our approach</p><h2>Familiar surroundings. Thoughtful support.</h2><p>We believe care conversations should begin with listening. Our service range brings together clinical, practical and family support so you can ask the right questions and understand the next step.</p><p>Availability and service arrangements are confirmed directly with the team for each enquiry.</p><Link className="button" href="/contact">Talk to the team <span>↗</span></Link></div></div></section></PageShell>;
}
