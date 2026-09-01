import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PhilosophyMatrix from "@/components/PhilosophyMatrix";
import GrowthPipeline from "@/components/GrowthPipeline";
import ResultsCounter from "@/components/ResultsCounter";

export const metadata: Metadata = {
  // The root layout's title.template does not apply to app/page.tsx since
  // they share the same route segment, so the full title is spelled out here.
  title: "Digital Growth Partner in Sri Lanka | They Will Know You",
  description:
    "Turning attention into trust and trust into measurable growth. We build repeatable, data-backed strategy, content, and performance marketing systems that scale ambitious brands.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <PhilosophyMatrix />
      <GrowthPipeline />
      <ResultsCounter />
    </>
  );
}
