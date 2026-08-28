import { CONTACT_INFO } from "@/lib/navigation";

export const SITE_URL = "https://theywillknowyou.com";
export const SITE_NAME = "They Will Know You";
export const SITE_DESCRIPTION =
  "TWKY Branding is a digital growth partner in Sri Lanka, helping brands turn attention into trust and trust into measurable growth through strategy, content, and performance marketing.";

function toSriLankaE164(localNumber: string): string {
  const digitsOnly = localNumber.replace(/\D/g, "");
  return `+94${digitsOnly.replace(/^0/, "")}`;
}

const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "TWKY Branding",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.jpeg`,
  },
  description: SITE_DESCRIPTION,
  email: CONTACT_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "71B Dutugemunu Street, Kalubowila",
    addressLocality: "Dehiwala",
    addressCountry: "LK",
  },
  contactPoint: CONTACT_INFO.hotlines.map((hotline) => ({
    "@type": "ContactPoint",
    contactType: "customer service",
    name: hotline.name,
    telephone: toSriLankaE164(hotline.number),
    areaServed: "LK",
  })),
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, websiteSchema],
};
