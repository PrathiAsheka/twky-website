"use client";

import { motion } from "framer-motion";
import { fadeUpContainer, fadeUpItem } from "@/lib/motion";

export default function PhilosophyMatrix() {
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
            className="mb-12 flex items-center lg:mb-16"
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              Philosophy
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_auto_1fr] lg:gap-0">
            <motion.p
              variants={fadeUpItem}
              className="max-w-3xl text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold leading-[1.2] tracking-tight text-white lg:pr-16"
            >
              Strategy without execution is theory. Execution without
              strategy is noise. We deliver both. Our commitment goes far
              beyond deliverables—we continuously bring proactive ideas,
              creative excellence, and strategic insights to help you exceed
              your goals.
            </motion.p>

            <motion.div
              variants={fadeUpItem}
              className="hidden w-px self-stretch bg-line lg:block"
            />

            <motion.div variants={fadeUpItem} className="lg:pl-16">
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                Our Approach
              </span>
              <p className="mt-5 text-base leading-relaxed text-white/60">
                We combine strategy, creativity, and performance marketing to
                build brands that scale.
              </p>
              <ul className="mt-8 flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-white/40">
                <li>— Strategy</li>
                <li>— Creativity</li>
                <li>— Performance</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
