import type { Metadata } from "next";
import { siteName } from "./site-data";

export function pageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: { title: `${title} | Vital`, description, siteName, type: "website", locale: "en_GB" },
  };
}
