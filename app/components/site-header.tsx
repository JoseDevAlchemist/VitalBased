"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Contact", "/contact"]];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container header-inner">
      <Link href="/" className="brand" aria-label="Vital Home Based Care & Emergency Services home" onClick={() => setOpen(false)}><Image src="/images/vital-logo.png" alt="" width={46} height={42} priority /><span><strong>Vital</strong><small>Home Based Care</small></span></Link>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}><span className="sr-only">{open ? "Close" : "Open"} navigation</span><i /><i /><i /></button>
      <nav id="site-nav" className={`site-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<a className="button button-small" href="tel:+254712780902">Call to discuss care <span>↗</span></a></nav>
    </div>
  </header>;
}
