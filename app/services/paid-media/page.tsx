import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/structuredData";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata: Metadata = pageMetadata({
  title: "Paid Media & Ads Management",
  description:
    "Meta and paid social advertising built on funnel strategy, creative testing and continuous optimisation that turns ad spend into scale.",
  path: "/services/paid-media",
});

const BEYOND_EXECUTION = [
  {
    title: "Paid Media Management",
    description:
      "Full campaign management across paid channels for consistent performance.",
  },
  {
    title: "Paid Media Audits",
    description:
      "Deep-dive analysis of existing campaigns to uncover inefficiencies and opportunities.",
  },
  {
    title: "Paid Media Strategy Development",
    description:
      "Bespoke frameworks built around your funnel, audience, and growth targets.",
  },
  {
    title: "Offline Campaign Support",
    description:
      "Bridging the gap between digital and traditional marketing efforts.",
  },
  {
    title: "Creative Campaign Ideation",
    description:
      "Bold, original concepts that cut through the noise and capture attention.",
  },
];

const PERFORMANCE_PILLARS = [
  {
    title: "Funnel-Based Campaign Structures",
    description:
      "Every campaign is architected around the customer journey — from awareness through to conversion — ensuring no opportunity is missed at any stage of the funnel.",
  },
  {
    title: "Creative Testing Frameworks",
    description:
      "Systematic A/B and multivariate testing of creative assets to identify what resonates and scale what works.",
  },
  {
    title: "Continuous Optimisation Systems",
    description:
      "Ongoing monitoring and refinement of campaigns to maximise return on ad spend and drive sustainable performance improvements.",
  },
];

const AUDIT_STEPS = [
  {
    index: "01",
    title: "Full Funnel Audit",
    description:
      "End-to-end review of campaign structure, targeting, and funnel alignment to identify gaps and opportunities.",
  },
  {
    index: "02",
    title: "Creative Performance Breakdown",
    description:
      "Granular analysis of which creatives are driving results and which are draining budget without return.",
  },
  {
    index: "03",
    title: "Budget Efficiency Analysis",
    description:
      "Identifying where spend is being wasted and where reallocation can drive immediate performance gains.",
  },
  {
    index: "04",
    title: "Clear Scaling Roadmap",
    description:
      "A prioritised, actionable plan for scaling campaigns with confidence and precision.",
  },
];

export default function PaidMediaPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Services", path: "/services" }, { name: "Paid Media", path: "/services/paid-media" }]),
          serviceSchema({
            name: "Paid Media & Ads Management",
            serviceType: "Paid social advertising",
            description: metadata.description as string,
            path: "/services/paid-media",
          }),
        ]}
      />
      <PageHero
        eyebrow="Services / Paid Media"
        title="Advanced Advertising & Performance"
        description="Paid media that works harder, smarter, and more efficiently."
      />

      <Section eyebrow="Beyond Execution">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BEYOND_EXECUTION.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Performance Driven Advertising">
        <div className="flex flex-col gap-10">
          {PERFORMANCE_PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group grid grid-cols-1 gap-4 rounded-lg transition-colors duration-300 hover:bg-white/[0.02] lg:grid-cols-[auto_1fr_2fr] lg:items-start lg:gap-10"
            >
              <span className="text-xs font-semibold tracking-[0.2em] text-white/30 transition-colors duration-300 group-hover:text-white/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-white">
                {pillar.title}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-white/55">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Audit and Scale">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {AUDIT_STEPS.map((step) => (
            <Card key={step.title} {...step} />
          ))}
        </div>
      </Section>
    </>
  );
}
