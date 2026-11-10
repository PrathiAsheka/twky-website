import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/structuredData";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import TeamCard from "@/components/TeamCard";

export const metadata: Metadata = pageMetadata({
  title: "Leadership Team",
  description:
    "Meet the team behind TWKY’s growth systems — co-founders Chamodya Maduranga Kaldera and Saduka Sachintha, and the people who run strategy and operations.",
  path: "/about/leadership",
});

const TEAM = [
  { name: "Chamodya Maduranga Kaldera", role: "Co-Founder" },
  { name: "Saduka Sachintha", role: "Co-Founder" },
  { name: "Resandu Samadith", role: "Executive — Operations & Strategy" },
  { name: "Disara Aluthge", role: "Executive — Business Development" },
  {
    name: "Prathibha Dissanayake",
    role: "Intern — IT & Digital Marketing",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "About", path: "/about" }, { name: "Leadership Team", path: "/about/leadership" }])}
      />
      <PageHero
        eyebrow="About / Leadership"
        title="The people behind the growth systems."
      />

      <Section eyebrow="Leadership Team">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {TEAM.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </Section>
    </>
  );
}
