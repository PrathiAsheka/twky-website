import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import StatGrid from "@/components/StatGrid";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Ceylon Wedding Planners Case Study — They Will Know You",
  description:
    "Luxury Brand Positioning — premium storytelling and high-value audience targeting through visual consistency.",
};

const OUTCOMES = [
  {
    title: "Elevated Brand Perception",
    description:
      "Positioning Ceylon Wedding Planners as the premium choice in a competitive market.",
  },
  {
    title: "High-Value Audience Targeting",
    description:
      "Reaching the right people — those with the intent and means to invest in luxury experiences.",
  },
  {
    title: "Consistent Storytelling",
    description:
      "A coherent visual and narrative identity maintained across every touchpoint.",
  },
  {
    title: "Lead-Ready Digital Presence",
    description:
      "A brand ecosystem primed to convert interest into enquiries and enquiries into clients.",
  },
];

export default function CeylonWeddingPlannersPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Study / Luxury & Wedding Brands"
        title="Ceylon Wedding Planners"
        description="Luxury Brand Positioning — premium storytelling and high-value audience targeting through visual consistency. A brand built to attract discerning clients who expect nothing less than excellence."
      />

      <Section eyebrow="Luxury Market Growth">
        <p className="mb-10 max-w-2xl text-sm uppercase tracking-[0.2em] text-white/40">
          Performance Snapshot — Ceylon Wedding Planners
        </p>
        <StatGrid
          stats={[
            {
              value: 500,
              suffix: "K+",
              label: "Monthly Views",
              description:
                "Consistent monthly visibility within the luxury wedding market.",
            },
            {
              value: 200,
              suffix: "K+",
              label: "Monthly Reach",
              description:
                "High-value audience segments reached with precision targeting.",
            },
            {
              value: 4,
              suffix: "K+",
              label: "Interactions",
              description:
                "Quality engagement from an audience primed for high-value decisions.",
            },
          ]}
        />
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/50">
          The audience is deliberately curated around high-value segments —
          ensuring every impression counts and every interaction moves a
          potential client closer to conversion.
        </p>
      </Section>

      <Section eyebrow="From Content to Conversion">
        <div className="mb-12 border-l-2 border-white/20 pl-8">
          <p className="max-w-2xl text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold leading-[1.3] tracking-tight text-white">
            Strategy without execution is theory. Execution without strategy
            is noise. We deliver both, and the results speak for themselves.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {OUTCOMES.map((outcome) => (
            <Card key={outcome.title} {...outcome} />
          ))}
        </div>
      </Section>
    </>
  );
}
