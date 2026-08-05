import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import GrowthPipeline from "@/components/GrowthPipeline";
import Card from "@/components/Card";
import LinkCard from "@/components/LinkCard";
import { WHAT_WE_DO } from "@/lib/whatWeDo";

export const metadata: Metadata = {
  title: "Services — They Will Know You",
  description:
    "End-to-end execution, plus everything beyond it — social media management, content strategy, brand positioning, paid media, and digital marketing consultation.",
};

const SUBPAGES = [
  {
    title: "Execution Suite",
    href: "/services/execution",
    description:
      "The core content engine — planning, production, copywriting, publishing, and reporting.",
  },
  {
    title: "Paid Media",
    href: "/services/paid-media",
    description:
      "Funnel-based advertising, creative testing, and continuous optimisation systems.",
  },
  {
    title: "Advanced Consulting",
    href: "/services/advanced-consulting",
    description:
      "Strategic advisory on audience clarity, brand positioning, and content direction.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end execution. Plus everything beyond it."
        description="A dual approach: the core content engine that keeps your brand running, and the strategic layer that keeps it scaling."
      />

      <Section eyebrow="What We Do">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_WE_DO.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <GrowthPipeline eyebrow="Our Approach" />

      <Section eyebrow="Explore">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SUBPAGES.map((page) => (
            <LinkCard key={page.href} {...page} />
          ))}
        </div>
      </Section>
    </>
  );
}
