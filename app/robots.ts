import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/connect",
    },
    sitemap: "https://www.theywillknowyou.com/sitemap.xml",
  };
}
