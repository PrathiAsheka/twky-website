"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";
import GlobeVisual from "@/components/GlobeVisual";
import TiltFrame from "@/components/TiltFrame";
import { usePreloader } from "@/components/PreloaderProvider";
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

const CLIENTS = ["Nadeesha Koralage"];

export default function Hero() {
  const isPreloading = usePreloader();

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Blueprint grid background — pure CSS, no image assets */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #121212 1px, transparent 1px), linear-gradient(to bottom, #121212 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 35%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 30%, black 35%, transparent 80%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-10 sm:pt-12 lg:px-10 lg:pb-24 lg:pt-14">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate={isPreloading ? "hidden" : "show"}
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-white/70 backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
              Digital Growth Partner
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-8 max-w-2xl text-[clamp(2.75rem,5vw,5.5rem)] leading-[0.98] tracking-tight text-white"
            >
              <span className="block font-bold">
                We don&apos;t just market.
              </span>
              <span className="block font-semibold text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.9)]">
                We build influence.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-md text-base leading-relaxed text-white/60 sm:text-lg"
            >
              Turning attention into trust and trust into measurable growth.
              We build repeatable, data-backed systems that scale ambitious
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
            animate={
              isPreloading
                ? { opacity: 0, scale: 0.9 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <TiltFrame>
              <GlobeVisual />
            </TiltFrame>
          </motion.div>
        </div>

        <div className="relative z-10 mt-20 border-t border-white/10 pt-10 lg:mt-24">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
            Trusted By
          </p>
          <div className="flex flex-wrap gap-4">
            {CLIENTS.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center border border-white/10 px-6 py-6 text-center text-sm font-semibold uppercase tracking-wide text-white/45 transition-colors duration-300 hover:border-white/30 hover:text-white"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
