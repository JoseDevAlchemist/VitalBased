"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { contacts, siteName } from "../lib/site-data";
import { PhoneIcon } from "./icons";

const links = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Contact", "/contact"]];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);

  return (
    <header className="site-header" onKeyDown={(event) => {
      if (open && event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${siteName} home`} onClick={() => setOpen(false)}>
          <Image src="/images/vital-logo.png" alt="" width={52} height={46} preload />
          <span><strong>Vital</strong><small>Home Based Care &amp; Emergency Services</small></span>
        </Link>
        <button className="menu-button" ref={trigger} type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={`site-nav${open ? " is-open" : ""}`} aria-label="Primary">
          {links.map(([label, href]) => {
            const current = pathname === href;
            const active = current || pathname.startsWith(`${href}/`);
            return <Link key={href} href={href} aria-current={current ? "page" : active ? "location" : undefined} onClick={() => setOpen(false)}>{label}</Link>;
          })}
        </nav>
        <a className="button header-call" href={`tel:${contacts[0].phone}`}><PhoneIcon /> Call Vital</a>
      </div>
    </header>
  );
}
