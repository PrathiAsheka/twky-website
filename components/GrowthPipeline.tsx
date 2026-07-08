"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUpContainer, fadeUpItem } from "@/lib/motion";

const PILLARS = [
  {
    index: "01",
    title: "Strategy",
    description: "Strategy-first thinking guides priorities.",
  },
  {
    index: "02",
    title: "Content",
    description: "Platform-native execution tailored per channel.",
  },
  {
    index: "03",
    title: "Distribution",
    description: "Multi-channel publishing connects audiences.",
  },
  {
    index: "04",
    title: "Optimisation",
    description: "Data-backed decisions refine performance.",
  },
];

const cardVariants: Variants = {
  rest: { backgroundColor: "#0D0D0D", borderColor: "#262626" },
  hover: { backgroundColor: "#FFFFFF", borderColor: "#FFFFFF" },
};

const numberVariants: Variants = {
  rest: { color: "rgba(255,255,255,0.3)" },
  hover: { color: "rgba(0,0,0,0.4)" },
};

const titleVariants: Variants = {
  rest: { color: "#FFFFFF" },
  hover: { color: "#000000" },
};

const descriptionVariants: Variants = {
  rest: { color: "rgba(255,255,255,0.55)" },
  hover: { color: "rgba(0,0,0,0.7)" },
};

const hoverTransition = { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const };

interface GrowthPipelineProps {
  eyebrow?: string;
  heading?: string;
}

export default function GrowthPipeline({
  eyebrow = "02 — The Growth System",
  heading = "Every brand we work with benefits from a structured, repeatable system, not guesswork.",
}: GrowthPipelineProps) {
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
            className="mb-12 flex items-center gap-4 lg:mb-16"
          >
            <span className="h-px w-12 bg-white/30" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpItem}
            className="max-w-2xl text-[clamp(1.75rem,3vw,2.75rem)] font-bold leading-tight tracking-tight text-white"
          >
            {heading}
          </motion.h2>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {PILLARS.map((pillar) => (
              <motion.div key={pillar.index} variants={fadeUpItem}>
                <motion.div
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  variants={cardVariants}
                  transition={hoverTransition}
                  className="flex h-full cursor-default flex-col justify-between border p-8 lg:min-h-[280px]"
                >
                  <motion.span
                    variants={numberVariants}
                    transition={hoverTransition}
                    className="text-sm font-semibold tracking-[0.2em]"
                  >
                    {pillar.index}
                  </motion.span>

                  <div className="mt-10 lg:mt-0">
                    <motion.h3
                      variants={titleVariants}
                      transition={hoverTransition}
                      className="text-2xl font-bold tracking-tight"
                    >
                      {pillar.title}
                    </motion.h3>
                    <motion.p
                      variants={descriptionVariants}
                      transition={hoverTransition}
                      className="mt-3 text-sm leading-relaxed"
                    >
                      {pillar.description}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
