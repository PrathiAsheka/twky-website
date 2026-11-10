import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/structuredData";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Card from "@/components/Card";

export const metadata: Metadata = pageMetadata({
  title: "Social Media Management & Content",
  description:
    "Our core content engine: weekly planning, video production, copywriting, multi-platform publishing and monthly performance reporting.",
  path: "/services/execution",
});

const EXECUTION_ITEMS = [
  {
    title: "Weekly Content Planning & Scripting",
    description:
      "Structured calendars and scripts tailored to your brand narrative.",
  },
  {
    title: "Video Production Management & Optimisation",
    description:
      "End-to-end oversight of video assets for maximum platform performance.",
  },
  {
    title: "High-Converting Copywriting",
    description: "Words that move audiences from awareness to action.",
  },
  {
    title: "Multi-Platform Publishing",
    description: "Seamless distribution across every relevant channel.",
  },
  {
    title: "Performance Tracking & Reporting",
    description: "Clear, actionable insights delivered consistently.",
  },
  {
    title: "Strategic Consultation",
    description: "Ongoing advisory to keep your brand ahead of the curve.",
  },
];

const COMPULSORY_TASKS = [
  "Weekly Content Planning",
  "Short-Form Scripting",
  "Video Narrative Review",
  "Editing Team Management",
  "Project Management",
  "Production Enhancement",
  "Benchmark Auditing",
  "Final Approval Workflow",
  "High-Engagement Captions",
  "Multi-Platform Publishing",
  "Strategic Re-uploads",
  "Professional Copywriting",
  "Urgent Content Handling",
  "Monthly Progress Reports",
  "Strategic Consultation",
  "Creative Activation",
  "Primary Theme Development",
  "Feedback Integration",
  "Digital Auditing",
  "Trend & Threat Briefings",
];

export default function ExecutionPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Services", path: "/services" }, { name: "Execution Suite", path: "/services/execution" }]),
          serviceSchema({
            name: "Social Media Management & Content Creation",
            serviceType: "Social media management",
            description: metadata.description as string,
            path: "/services/execution",
          }),
        ]}
      />
      <PageHero
        eyebrow="Services / Execution Suite"
        title="End to End Execution"
        description="The complete content engine — from the first script to the final published post."
      />

      <Section eyebrow="Core Offerings">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXECUTION_ITEMS.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Compulsory Suite — Full Scope">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {COMPULSORY_TASKS.map((task) => (
            <li
              key={task}
              className="group flex items-start gap-3 text-base font-medium text-white/85 transition-colors duration-300 hover:text-white"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50 transition-colors duration-300 group-hover:bg-white" />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
