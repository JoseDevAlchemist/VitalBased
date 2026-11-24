import type { NextConfig } from "next";
import { serviceHref, services } from "./app/lib/site-data";

const nextConfig: NextConfig = {
  async redirects() {
    return services.map(({ slug }) => ({
      source: `/services/${slug}`,
      destination: serviceHref(slug),
      permanent: true,
    }));
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
