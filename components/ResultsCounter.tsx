"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import { fadeUpContainer, fadeUpItem } from "@/lib/motion";

const STATS = [
  { value: 11, suffix: "Mn+", label: "Video Views" },
  { value: 2, suffix: "Mn+", label: "Total Reach" },
  { value: 600, suffix: "K+", label: "Interactions" },
];

export default function ResultsCounter() {
  return (
    <section className="relative border-t border-line bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={fadeUpItem}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-white/30" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              03 — Proven Results
            </span>
          </motion.div>

          <motion.p
            variants={fadeUpItem}
            className="mb-14 text-sm uppercase tracking-[0.2em] text-white/40 lg:mb-20"
          >
            Facebook Performance — Nadeesha Koralage
          </motion.p>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUpItem}
                className="flex flex-col gap-3"
              >
                <span className="text-[clamp(3rem,7vw,5.5rem)] font-bold leading-none tracking-tight text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm font-medium uppercase tracking-[0.25em] text-white/70">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUpItem} className="mt-14 lg:mt-16">
            <Link
              href="/case-studies/nadeesha-koralage"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              View Full Case Study
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
