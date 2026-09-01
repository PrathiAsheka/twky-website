import type { Metadata } from "next";
import Image from "next/image";
import { Clock, CircleCheck, MessageCircle, TrendingUp } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import StatGrid from "@/components/StatGrid";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Nadeesha Koralage Case Study",
  description:
    "Authority Driven Personal Brand — full ecosystem social media growth focused on authority, reach, and consistency.",
};

const iconClass = "h-6 w-6";

const GROWTH_PRINCIPLES = [
  "A clear and consistent content strategy tailored to students",
  "High volume of engaging short-form video content",
  "Strong storytelling that simplifies complex business concepts",
  "Continuous performance tracking and content optimization",
  "Timely content aligned with academic needs and trends",
];

export default function NadeeshaKoralagePage() {
  return (
    <>
      <PageHero
        eyebrow="Case Study / Education & Personal Brands"
        title="Nadeesha Koralage"
        description="Authority Driven Personal Brand — full ecosystem social media growth focused on authority, reach, and consistency. A comprehensive strategy built to position Nadeesha as a leading voice in his field across every major platform."
      />

      <Section eyebrow="The Growth Narrative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[320px_1fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none">
            <Image
              src="/nadeesha-koralage-portrait.webp"
              alt="Nadeesha Koralage"
              width={800}
              height={1426}
              unoptimized
              className="h-auto w-full object-contain"
            />
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-white/70">
            Mr. Nadeesha Koralage, an Advanced Level Business Studies Tutor,
            has been one of the earliest and most valued clients of TWKY
            Branding, working with us since 2024. What started as a focused
            effort to strengthen his online presence has grown into a
            powerful digital ecosystem that continues to expand across
            multiple platforms. Today, his brand stands as one of the most
            recognized Business Studies education platforms on social media
            in Sri Lanka.
          </p>
        </div>
      </Section>

      <Section eyebrow="Full-Year Results — January to December 2025">
        <div className="grid grid-cols-1 items-center gap-12 border-b border-line pb-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <p className="max-w-xl text-[clamp(1.35rem,2.4vw,1.85rem)] font-medium italic leading-relaxed text-white/80">
            &ldquo;The classroom became the content. The content built a
            community. And the community delivered extraordinary
            results.&rdquo;
          </p>
          <div className="flex flex-col gap-2 lg:items-end lg:text-right">
            <span className="text-[clamp(4rem,9vw,6.5rem)] font-bold leading-none tracking-tight text-white">
              <AnimatedCounter value={219} suffix="M+" />
            </span>
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-white/60">
              Total Views Across All Platforms
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/35">
              In a country with a population of 22 million
            </span>
          </div>
        </div>

        <div className="mt-12">
          <StatGrid
            stats={[
              {
                value: 15,
                suffix: "Mn+",
                label: "Total Interactions",
                icon: <MessageCircle className={iconClass} strokeWidth={1.5} />,
              },
              {
                value: 20252,
                suffix: " Days",
                label: "Facebook Watch Time",
                icon: <Clock className={iconClass} strokeWidth={1.5} />,
              },
              {
                value: 156300,
                suffix: "+",
                label: "Facebook Follower Growth",
                description: "379.6% increase year-on-year.",
                icon: <TrendingUp className={iconClass} strokeWidth={1.5} />,
              },
            ]}
          />
        </div>
      </Section>

      <Section eyebrow="What Made This Growth Possible">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {GROWTH_PRINCIPLES.map((item) => (
            <li
              key={item}
              className="group flex items-start gap-3 text-base font-medium text-white/85 transition-colors duration-300 hover:text-white"
            >
              <CircleCheck
                className="mt-0.5 h-5 w-5 shrink-0 text-white/40 transition-colors duration-300 group-hover:text-white"
                strokeWidth={1.5}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="The Result">
        <div className="border-l-2 border-white/20 pl-8">
          <p className="max-w-3xl text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold leading-[1.3] tracking-tight text-white">
            Today, Mr. Nadeesha Koralage is not just a tutor on social media.
            He is a recognized personal brand with strong influence, high
            engagement, and a growing digital footprint that continues to
            attract and impact thousands of students every day.
          </p>
        </div>
      </Section>
    </>
  );
}
