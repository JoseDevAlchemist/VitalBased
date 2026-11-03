import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Vital Home Based Care & Emergency Services", template: "%s | Vital" },
  description: "Compassionate home-based healthcare and emergency service enquiries from Vital Home Based Care & Emergency Services.",
  openGraph: {
    title: "Vital Home Based Care & Emergency Services",
    description: "Contact Vital to discuss home-based healthcare, nursing and emergency service enquiries.",
    type: "website",
    images: [{ url: "/images/healthcare-worker.jpg", width: 1600, height: 1067, alt: "Black African healthcare professional reviewing a care record" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
