import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Case Studies — They Will Know You",
  description:
    "We partner with ambitious brands across diverse sectors, each with a unique story and a shared goal of meaningful digital growth.",
};

const SECTORS = [
  {
    title: "Education & Personal Brands",
    description:
      "Helping thought leaders and educators build authority and grow engaged audiences.",
  },
  {
    title: "Luxury & Wedding Brands",
    description:
      "Premium storytelling for high-value markets that demand visual excellence.",
  },
  {
    title: "Consulting Clients",
    description: "Strategic digital presence for professionals and advisory firms.",
  },
  {
    title: "Scaling Businesses",
    description: "Growth systems for brands ready to move from traction to scale.",
  },
];

const FEATURED = [
  {
    title: "Nadeesha Koralage",
    href: "/case-studies/nadeesha-koralage",
    tag: "Authority Driven Personal Brand",
    stat: "11Mn+ Facebook video views",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Who We Work With"
        description="We partner with ambitious brands across diverse sectors, each with a unique story and a shared goal of meaningful digital growth."
      />

      <Section eyebrow="Sectors">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SECTORS.map((sector) => (
            <Card key={sector.title} {...sector} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Featured Work">
        <div className="grid grid-cols-1 gap-6">
          {FEATURED.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex max-w-2xl flex-col justify-between border border-line bg-surface p-10 transition-colors duration-300 hover:border-white hover:bg-white lg:min-h-[240px]"
            >
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 group-hover:text-black/50">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-black">
                  {item.title}
                </h3>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm text-white/55 transition-colors duration-300 group-hover:text-black/70">
                  {item.stat}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 group-hover:text-black/50">
                  View Case Study →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
