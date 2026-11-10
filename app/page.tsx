import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Hero from "@/components/Hero";
import PhilosophyMatrix from "@/components/PhilosophyMatrix";
import GrowthPipeline from "@/components/GrowthPipeline";
import ResultsCounter from "@/components/ResultsCounter";

export const metadata: Metadata = pageMetadata({
  title: "Digital Marketing Agency in Sri Lanka | They Will Know You",
  description:
    "Sri Lankan digital marketing agency building data-backed strategy, content and performance marketing systems that turn attention into measurable growth.",
  path: "/",
  absoluteTitle: true,
});

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
