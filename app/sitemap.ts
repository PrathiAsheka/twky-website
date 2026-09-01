import type { MetadataRoute } from "next";

const BASE_URL = "https://theywillknowyou.com";

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
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...ROUTES.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
