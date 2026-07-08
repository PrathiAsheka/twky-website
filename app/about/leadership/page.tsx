import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import TeamCard from "@/components/TeamCard";

export const metadata: Metadata = {
  title: "Leadership — They Will Know You",
  description: "The team behind TWKY's growth systems.",
};

const TEAM = [
  {
    name: "Chamodya Maduranga Kaldera",
    role: "Co-Founder",
    academics: [
      "BSc. Business Administration — USJ",
      "MSc. Strategic Marketing — Queen Margaret University",
    ],
    bio: "7+ years managing paid media across fitness, leisure, ecommerce, and FMCG. Worked with F45, Anytime Fitness, BFT, BANX, and Ceilao Villas.",
  },
  {
    name: "Saduka Sachintha",
    role: "Co-Founder",
    academics: [
      "BSc. Business Administration — USJ",
      "MSc. Strategic Marketing — Queen Margaret University",
    ],
    bio: "Experience across Nestomalt, Milo, Nescafe, Maggie, F45, BFT, and Anytime Fitness. Lecturer in Digital Marketing at APIDM and the University of Sri Jayewardenapura.",
  },
  {
    name: "Resandu Samadith",
    role: "Executive — Operations & Strategy",
    academics: ["BSc Project Management Undergraduate — NSBM"],
    bio: "Leads execution, client coordination, and strategic oversight.",
  },
  {
    name: "Disara Aluthge",
    role: "Executive — Business Development",
    academics: [
      "BSc Information Systems Undergraduate — KDU",
      "Diploma in Professional and Digital Marketing — CIM",
    ],
  },
];

export default function LeadershipPage() {
  return (
    <>
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
