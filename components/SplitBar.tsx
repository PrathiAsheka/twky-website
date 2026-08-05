"use client";

import { motion } from "framer-motion";

interface SplitBarProps {
  organicPct: number;
  paidPct: number;
}

export default function SplitBar({ organicPct, paidPct }: SplitBarProps) {
  return (
    <div className="w-full">
      <div className="flex h-2 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${organicPct}%` }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-white"
        />
      </div>
      <div className="mt-3 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-white/50">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white" />
          Organic {organicPct.toFixed(1)}%
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          Paid {paidPct.toFixed(1)}%
        </span>
      </div>
    </div>
  );
}
