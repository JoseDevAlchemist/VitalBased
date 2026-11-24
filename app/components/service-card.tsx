import Image from "next/image";
import type { services } from "../lib/site-data";
import { ServiceIcon } from "./service-icons";

type Service = (typeof services)[number];

export function ServiceCard({ service, context }: {
  service: Service;
  context: "catalogue" | "preview";
}) {
  const { slug, title, description, photoAlt } = service;
  const catalogue = context === "catalogue";
  const Heading = catalogue ? "h2" : "h3";
  const headingId = catalogue ? `${slug}-heading` : `preview-${slug}-heading`;

  return (
    <article id={catalogue ? slug : undefined} aria-labelledby={headingId} tabIndex={catalogue ? -1 : undefined}>
      <div className="photo catalogue-photo">
        <Image
          src={`/images/${slug}.webp`}
          alt={photoAlt}
          fill
          sizes={catalogue
            ? "(max-width: 559px) 94vw, (max-width: 899px) 46vw, (max-width: 1199px) 30vw, (max-width: 1450px) 23vw, 318px"
            : "(max-width: 559px) 94vw, (max-width: 899px) 46vw, (max-width: 1450px) 30vw, 424px"}
        />
      </div>
      <div className="catalogue-copy">
        <div className="catalogue-title">
          <ServiceIcon slug={slug} />
          <Heading id={headingId}>{title}</Heading>
        </div>
        <p>{description}</p>
      </div>
    </article>
  );
}
