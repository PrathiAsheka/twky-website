"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUpContainer, fadeUpItem } from "@/lib/motion";

interface SectionProps {
  eyebrow: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  eyebrow,
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 border-t border-line bg-black ${className}`}
    >
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

          {children}
        </motion.div>
      </div>
    </section>
  );
}
