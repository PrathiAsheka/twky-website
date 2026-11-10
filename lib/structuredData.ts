import { CONTACT_INFO, SOCIAL_PROFILES, toSriLankaE164 } from "@/lib/navigation";

// www is the primary host (Vercel 308-redirects the bare domain to it).
// Every canonical, sitemap, Open Graph and schema URL derives from this.
export const SITE_URL = "https://www.theywillknowyou.com";
export const SITE_NAME = "They Will Know You";
export const SITE_DESCRIPTION =
  "TWKY Branding is a digital marketing agency in Sri Lanka, helping brands turn attention into trust and trust into measurable growth through strategy, content, and performance marketing.";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const organizationSchema = {
  // ProfessionalService is a LocalBusiness subtype, which makes the business
  // eligible for local search features alongside the Organization data.
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  alternateName: "TWKY Branding",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.jpeg`,
  },
  image: `${SITE_URL}/og-image.png`,
  description: SITE_DESCRIPTION,
  email: CONTACT_INFO.email,
  telephone: toSriLankaE164(CONTACT_INFO.hotlines[0].number),
  address: {
    "@type": "PostalAddress",
    streetAddress: "71B Dutugemunu Street, Kalubowila",
    addressLocality: "Dehiwala",
    addressRegion: "Western Province",
    addressCountry: "LK",
  },
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  contactPoint: CONTACT_INFO.hotlines.map((hotline) => ({
    "@type": "ContactPoint",
    contactType: "customer service",
    name: hotline.name,
    telephone: toSriLankaE164(hotline.number),
    areaServed: "LK",
  })),
  ...(SOCIAL_PROFILES.length > 0 ? { sameAs: SOCIAL_PROFILES } : {}),
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": ORGANIZATION_ID },
};

export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, websiteSchema],
};

export interface Crumb {
  name: string;
  path: string;
}

/** BreadcrumbList for an inner page. Home is prepended automatically. */
export function breadcrumbSchema(crumbs: Crumb[]) {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.path === "/" ? SITE_URL : `${SITE_URL}${crumb.path}`,
    })),
  };
}

/** Service schema for a /services/* page, offered by the organization. */
export function serviceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${SITE_URL}${path}`,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "Sri Lanka" },
  };
}
