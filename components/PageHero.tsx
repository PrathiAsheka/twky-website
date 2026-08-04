"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUpContainer, fadeUpItem } from "@/lib/motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-white opacity-[0.04] blur-[110px]" />

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-40">
        <motion.div variants={fadeUpContainer} initial="hidden" animate="show">
          <motion.div variants={fadeUpItem} className="mb-8 flex items-center">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUpItem}
            className="max-w-3xl text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[1.05] tracking-tight text-white"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={fadeUpItem}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
            >
              {description}
            </motion.p>
          )}

          {children && (
            <motion.div variants={fadeUpItem} className="mt-8">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
