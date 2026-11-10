import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/structuredData";

interface PageSeo {
  /** Page title without the brand suffix (the layout template adds " | They Will Know You"). */
  title: string;
  description: string;
  /** Route path, e.g. "/services/paid-media". Use "/" for the homepage. */
  path: string;
  /** Set true when `title` is already the full title (used by the homepage). */
  absoluteTitle?: boolean;
}

/**
 * Builds per-page metadata with a self-referencing canonical URL and
 * matching Open Graph / Twitter tags. Next.js merges metadata shallowly,
 * so openGraph and twitter must be spelled out in full on every page —
 * otherwise each page inherits the homepage's og:url.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: path,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        { url: "/og-image.png", width: 1200, height: 630, alt: SITE_NAME },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og-image.png"],
    },
  };
}
