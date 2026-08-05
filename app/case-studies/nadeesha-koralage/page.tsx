import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import StatGrid from "@/components/StatGrid";

export const metadata: Metadata = {
  title: "Nadeesha Koralage Case Study — They Will Know You",
  description:
    "Authority Driven Personal Brand — full ecosystem social media growth focused on authority, reach, and consistency.",
};

const FACEBOOK_VIEWS = [
  { value: "120.6M", label: "Total Views" },
  { value: "103.1M", label: "Organic Views" },
  { value: "17.6M", label: "Paid Views" },
];

const INSTAGRAM_VIEWS = [
  { value: "13.9M", label: "Total Views" },
  { value: "13.7M", label: "Organic Views" },
  { value: "264K", label: "Paid Views" },
];

const TIKTOK_VIEWS = [
  { value: "80.1M", label: "Total Views" },
  { value: "52", label: "Videos with 500K+ Views" },
];

const YOUTUBE_VIEWS = [{ value: "4.5M", label: "Total Views" }];

const PAID_PERFORMANCE = [
  { label: "Spend", value: "$1,953.98" },
  { label: "Impressions", value: "14,593,701" },
  { label: "Reach", value: "14,593,701" },
  { label: "Clicks", value: "72,246" },
];

const GROWTH_PRINCIPLES = [
  "A clear and consistent content strategy tailored to students",
  "High volume of engaging short-form video content",
  "Strong storytelling that simplifies complex business concepts",
  "Continuous performance tracking and content optimization",
  "Timely content aligned with academic needs and trends",
];

const GRID_COLS_BY_COUNT: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

function StatCardsRow({
  stats,
}: {
  stats: { value: string; label: string; description?: string }[];
}) {
  const gridCols = GRID_COLS_BY_COUNT[stats.length] ?? "sm:grid-cols-3";

  return (
    <div
      className={`grid grid-cols-1 gap-10 border border-line bg-surface p-8 sm:gap-10 sm:p-10 ${gridCols}`}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-2">
          <span className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-none tracking-tight text-white">
            {stat.value}
          </span>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
            {stat.label}
          </span>
          {stat.description && (
            <p className="mt-1 text-sm leading-relaxed text-white/50">
              {stat.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

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

      <Section eyebrow="Full-Year Results — January to December 2025">
        <StatGrid
          stats={[
            {
              value: 219,
              suffix: "Mn+",
              label: "Total Views (All Platforms)",
            },
            { value: 15, suffix: "Mn+", label: "Total Interactions" },
            { value: 20252, suffix: " Days", label: "Facebook Watch Time" },
            {
              value: 156300,
              suffix: "+",
              label: "Facebook Follower Growth",
              description: "379.6% increase year-on-year.",
            },
            {
              value: 26,
              suffix: "",
              label: "Facebook Videos with 500K+ Views",
            },
            {
              value: 52,
              suffix: "",
              label: "TikTok Videos with 500K+ Views",
            },
          ]}
        />
      </Section>

      <Section eyebrow="Facebook Performance Results — 2025">
        <StatCardsRow stats={FACEBOOK_VIEWS} />
      </Section>

      <Section eyebrow="Instagram Performance Results — 2025">
        <StatCardsRow stats={INSTAGRAM_VIEWS} />
      </Section>

      <Section eyebrow="TikTok Performance Results — 2025">
        <StatCardsRow stats={TIKTOK_VIEWS} />
      </Section>

      <Section eyebrow="YouTube Performance Results — 2025">
        <StatCardsRow stats={YOUTUBE_VIEWS} />
      </Section>

      <Section eyebrow="Paid Campaign Performance — 2025">
        <div className="divide-y divide-line border border-line bg-surface">
          {PAID_PERFORMANCE.map((row) => (
            <div
              key={row.label}
              className="flex items-baseline justify-between gap-6 px-6 py-5 sm:px-8"
            >
              <span className="text-sm font-semibold uppercase tracking-wide text-white">
                {row.label}
              </span>
              <span className="text-sm text-white/60">{row.value}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="What Made This Growth Possible">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {GROWTH_PRINCIPLES.map((item) => (
            <li
              key={item}
              className="group flex items-start gap-3 text-base font-medium text-white/85 transition-colors duration-300 hover:text-white"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50 transition-colors duration-300 group-hover:bg-white" />
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
