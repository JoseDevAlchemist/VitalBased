import type { Metadata } from "next";
import localFont from "next/font/local";
import { siteName } from "./lib/site-data";
import "./globals.css";

const headings = localFont({
  src: "./fonts/LiberationSerif-Regular.ttf",
  variable: "--font-editorial",
  display: "swap",
});
const body = localFont({
  src: "./fonts/Cantarell-VF.otf",
  variable: "--font-humanist",
  weight: "100 900",
  display: "swap",
});

const description = "Home nursing, doctor’s visits, rehabilitation and emergency services from Vital. Browse the service directory or speak directly with the team.";

export const metadata: Metadata = {
  title: { default: siteName, template: "%s | Vital" },
  description,
  openGraph: { title: siteName, description, siteName, type: "website", locale: "en_GB" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB" className={`${headings.variable} ${body.variable}`}><body>{children}</body></html>;
}
