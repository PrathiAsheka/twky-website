import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Advanced Consulting",
  description:
    "Strategic advisory on audience clarity, brand positioning, and content direction for brands navigating complex digital landscapes.",
};

const ADVISORY_PILLARS = [
  {
    title: "Audience Clarity",
    description:
      "Defining exactly who the brand speaks to — their motivations, behaviours, and decision-making triggers.",
  },
  {
    title: "Brand Positioning",
    description:
      "Establishing a clear, differentiated position in the market that resonates with the right audience.",
  },
  {
    title: "Content Direction",
    description:
      "Guiding the creative and editorial strategy to ensure every piece of content serves a purpose.",
  },
];

const CONSULTING_SCOPE = [
  "Personal branding strategy",
  "Social media audits",
  "Growth consultation",
  "Brand positioning",
];

const ADVANCED_SERVICES = [
  "Influencer strategy",
  "Email marketing",
  "Website updates",
  "Crisis management",
  "Trend monitoring",
  "Event marketing copy",
];

const listItemClasses =
  "group flex items-start gap-3 text-base font-medium text-white/85 transition-colors duration-300 hover:text-white";

export default function AdvancedConsultingPage() {
  return (
    <>
      <PageHero
        eyebrow="Services / Advanced Consulting"
        title="Strategic Advisory & Brand Positioning"
        description="Beyond execution, we bring deep strategic thinking to brands navigating complex digital landscapes. Our consultation work spans some of the most respected educators and thought leaders in the region."
      />

      <Section eyebrow="Strategic Advisory">
        <div className="flex flex-col gap-10">
          {ADVISORY_PILLARS.map((pillar, index) => (
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

      <Section eyebrow="Branding & Consulting">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          {CONSULTING_SCOPE.map((item) => (
            <li key={item} className={listItemClasses}>
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50 transition-colors duration-300 group-hover:bg-white" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Additional / Advanced Services">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANCED_SERVICES.map((item) => (
            <li key={item} className={listItemClasses}>
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50 transition-colors duration-300 group-hover:bg-white" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
