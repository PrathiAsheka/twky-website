"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import GlobeVisual from "@/components/GlobeVisual";
import { CTA_LABEL } from "@/lib/navigation";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-24 pt-10 sm:pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-10 lg:pb-32 lg:pt-14">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-white/30" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
              Digital Growth Partner
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-2xl text-[clamp(2.75rem,5vw,5.5rem)] font-bold leading-[0.98] tracking-tight text-white"
          >
            We don&apos;t just market.
            <br />
            <span className="font-semibold text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.9)]">
              We build influence.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-md text-base leading-relaxed text-white/60 sm:text-lg"
          >
            Turning attention into trust and trust into measurable growth. We
            build repeatable, data-backed systems that scale ambitious
            brands, moving completely away from guesswork.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton href="/contact">{CTA_LABEL}</MagneticButton>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block"
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white hover:text-white hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
              >
                Explore Our System
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <GlobeVisual />
        </motion.div>
      </div>
    </section>
  );
}
