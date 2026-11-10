import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/structuredData";

// lastModified is intentionally omitted: stamping every URL with the build
// time tells Google nothing and teaches it to ignore the field. Add a real
// date per route here when a page's content actually changes.
const ROUTES = [
  "/about",
  "/about/leadership",
  "/services",
  "/services/execution",
  "/services/paid-media",
  "/services/advanced-consulting",
  "/case-studies",
  "/case-studies/nadeesha-koralage",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...ROUTES.map((route) => ({
      url: `${SITE_URL}${route}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
