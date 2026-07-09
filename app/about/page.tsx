import type { Metadata } from "next";
import { Download } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import WireframePlaceholder from "@/components/WireframePlaceholder";
import MagneticButton from "@/components/MagneticButton";
import Card from "@/components/Card";
import { WHAT_WE_DO } from "@/lib/whatWeDo";

export const metadata: Metadata = {
  title: "About — They Will Know You",
  description:
    "A leading digital marketing partner in Sri Lanka, building distinctive brands and setting a higher standard in modern brand communication.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TWKY"
        title="Setting a higher standard in modern brand communication."
        description="To position TWKY Branding as a leading digital marketing partner in Sri Lanka, known for building distinctive brands, elevating digital presence, and setting a higher standard in modern brand communication."
      >
        <a
          href="/TWKY-Digital-Portfolio.pdf"
          download="TWKY-Digital-Portfolio.pdf"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white hover:text-white hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
        >
          <Download className="h-4 w-4" aria-hidden />
          Download Digital Portfolio
        </a>
      </PageHero>

      <Section id="who-we-are" eyebrow="Who We Are">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <p className="max-w-xl text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold leading-[1.3] tracking-tight text-white">
            We are a results-driven digital growth partner focused on
            turning attention into trust and trust into measurable growth.
            We combine strategy, creativity, and performance marketing to
            build brands that scale.
          </p>
          <WireframePlaceholder label="TWKY — Brand Sculpture" />
        </div>
      </Section>

      <Section id="vision-mission" eyebrow="Vision & Mission">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Vision
            </h3>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
              To position TWKY Branding as a leading digital marketing
              partner in Sri Lanka, known for building distinctive brands,
              elevating digital presence, and setting a higher standard in
              modern brand communication.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Mission
            </h3>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
              To deliver carefully crafted content and refined marketing
              strategies that help our clients stand out with clarity and
              credibility, while building long-term influence and
              sustainable growth.
            </p>
          </div>
        </div>
      </Section>

      <Section id="what-we-do" eyebrow="What We Do">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_WE_DO.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden border-t border-line bg-black">
        <div className="pointer-events-none absolute -left-24 bottom-0 h-[380px] w-[380px] rounded-full bg-white opacity-[0.04] blur-[100px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-24 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-32">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              The Team
            </span>
            <h2 className="mt-4 max-w-xl text-[clamp(1.75rem,3vw,2.75rem)] font-bold leading-tight tracking-tight text-white">
              Meet the people behind the growth systems.
            </h2>
          </div>
          <MagneticButton href="/about/leadership">
            View Leadership
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
