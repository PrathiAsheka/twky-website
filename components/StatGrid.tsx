"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { fadeUpItem } from "@/lib/motion";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
  icon?: ReactNode;
}

interface StatGridProps {
  title?: string;
  subtitle?: string;
  stats: Stat[];
}

export default function StatGrid({ title, subtitle, stats }: StatGridProps) {
  return (
    <motion.div variants={fadeUpItem}>
      {(title || subtitle) && (
        <div className="mb-10">
          {title && (
            <h3 className="text-xl font-bold tracking-tight text-white">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/40">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 gap-10 border border-line bg-surface p-8 sm:grid-cols-3 sm:gap-10 sm:p-10">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            {stat.icon && <div className="mb-1 text-white/50">{stat.icon}</div>}
            <span className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-none tracking-tight text-white">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
              {stat.label}
            </span>
            {stat.description && (
              <p className="mt-1 text-sm leading-relaxed text-white/50">
                {stat.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
