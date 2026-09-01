import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Navbar from "@/components/Navbar";
import ConditionalFooter from "@/components/ConditionalFooter";
import PreloaderProvider from "@/components/PreloaderProvider";
import Chatbot from "@/components/Chatbot";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, jsonLdSchema } from "@/lib/structuredData";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "They Will Know You — Digital Growth Partner",
    template: "%s | They Will Know You",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "digital marketing agency Sri Lanka",
    "social media management",
    "brand strategy",
    "performance marketing",
    "content strategy agency",
    "paid media management",
    "digital growth partner",
    "They Will Know You",
    "TWKY Branding",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  verification: {
    google: "JMZsJToH81mURDWj9PMfdSo_tBE-qwh3N_ZHOguXtHw",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "They Will Know You — Digital Growth Partner",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "They Will Know You — Digital Growth Partner",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdSchema).replace(/</g, "\\u003c"),
          }}
        />
        <GoogleTagManager gtmId="GTM-PNBGDTK7" />
        <PreloaderProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <ConditionalFooter />
          <Chatbot />
        </PreloaderProvider>
      </body>
    </html>
  );
}
