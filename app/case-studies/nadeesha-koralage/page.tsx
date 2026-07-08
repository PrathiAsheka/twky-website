import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import StatGrid from "@/components/StatGrid";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Nadeesha Koralage Case Study — They Will Know You",
  description:
    "Authority Driven Personal Brand — full ecosystem social media growth focused on authority, reach, and consistency.",
};

const AUDIENCE_REACH = [
  { value: 213700, label: "Facebook Followers" },
  { value: 23900, label: "Instagram Followers" },
  { value: 192800, label: "TikTok Followers" },
  { value: 19700, label: "YouTube Subscribers" },
];

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
        <p className="max-w-3xl text-lg leading-relaxed text-white/70">
          Mr. Nadeesha Koralage, an Advanced Level Business Studies Tutor,
          has been one of the earliest and most valued clients of TWKY
          Branding, working with us since 2024. What started as a focused
          effort to strengthen his online presence has grown into a powerful
          digital ecosystem that continues to expand across multiple
          platforms. Today, his brand stands as one of the most recognized
          Business Studies education platforms on social media in Sri Lanka.
        </p>
      </Section>

      <Section eyebrow="Facebook Performance Results">
        <StatGrid
          stats={[
            {
              value: 11,
              suffix: "Mn+",
              label: "Video Views",
              description: "Massive organic reach driven by consistent, high-quality content.",
            },
            {
              value: 2,
              suffix: "Mn+",
              label: "Total Reach",
              description: "Audiences reached across the Facebook ecosystem.",
            },
            {
              value: 600,
              suffix: "K+",
              label: "Interactions",
              description: "Likes, comments, shares, and saves reflecting genuine engagement.",
            },
          ]}
        />
      </Section>

      <Section eyebrow="TikTok Performance Results">
        <StatGrid
          stats={[
            { value: 7, suffix: "Mn+", label: "Video Views" },
            { value: 800, suffix: "K+", label: "Total Likes" },
            { value: 15, suffix: "K+", label: "Shares" },
          ]}
        />
      </Section>

      <Section eyebrow="Instagram Performance Results">
        <StatGrid
          stats={[
            { value: 2, suffix: "Mn+", label: "Total Views" },
            { value: 240, suffix: "K+", label: "Reach" },
            { value: 250, suffix: "K+", label: "Interactions" },
          ]}
        />
      </Section>

      <Section eyebrow="Audience Reach">
        <div className="grid grid-cols-2 gap-10 border-t border-line pt-10 lg:grid-cols-4">
          {AUDIENCE_REACH.map((stat) => (
            <div key={stat.label} className="group flex flex-col gap-2">
              <span className="text-[clamp(1.75rem,3vw,2.75rem)] font-bold leading-none tracking-tight text-white transition-transform duration-300 group-hover:-translate-y-1">
                <AnimatedCounter value={stat.value} suffix="+" />
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/45 transition-colors duration-300 group-hover:text-white/70">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Growth Snapshot">
        <p className="max-w-3xl text-lg leading-relaxed text-white/70">
          From December 2025 to March 2026, content performance and audience
          engagement improved significantly. According to the monthly
          insights report, total views grew from approximately{" "}
          <span className="font-semibold text-white">22.4 million</span> in
          December to over{" "}
          <span className="font-semibold text-white">29.2 million</span> in
          March — a strong upward trend in content visibility and audience
          reach, with TikTok and Facebook driving viral reach while
          Instagram supported steady audience building and retention.
        </p>
      </Section>

      <Section eyebrow="What Made This Growth Possible">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {GROWTH_PRINCIPLES.map((item) => (
            <li
              key={item}
              className="group flex items-start gap-3 border-t border-line pt-4 text-sm text-white/60 transition-colors duration-300 hover:border-white/40"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40 transition-colors duration-300 group-hover:bg-white" />
              <span className="transition-colors duration-300 group-hover:text-white">
                {item}
              </span>
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
