"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpItem } from "@/lib/motion";

interface LinkCardProps {
  href: string;
  title: string;
  description: string;
  cta?: string;
  className?: string;
}

export default function LinkCard({
  href,
  title,
  description,
  cta = "View Details",
  className = "",
}: LinkCardProps) {
  return (
    <motion.div variants={fadeUpItem} className={className}>
      <Link
        href={href}
        className="group flex h-full flex-col border border-line bg-surface p-8 transition-colors duration-300 hover:border-white hover:bg-white"
      >
        <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-black">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/55 transition-colors duration-300 group-hover:text-black/70">
          {description}
        </p>
        <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.2em] text-white/40 transition-all duration-300 group-hover:gap-2 group-hover:text-black/50">
          {cta} <span aria-hidden>→</span>
        </span>
      </Link>
    </motion.div>
  );
}
