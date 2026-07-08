"use client";

import { motion } from "framer-motion";

interface WireframePlaceholderProps {
  label?: string;
  className?: string;
}

const corners = [
  "left-0 top-0 border-l border-t",
  "right-0 top-0 border-r border-t",
  "left-0 bottom-0 border-l border-b",
  "right-0 bottom-0 border-r border-b",
];

export default function WireframePlaceholder({
  label = "VISUAL ASSET — 01",
  className = "",
}: WireframePlaceholderProps) {
  return (
    <div
      className={`relative aspect-[4/3] w-full border border-dashed border-line ${className}`}
    >
      {corners.map((position) => (
        <span
          key={position}
          className={`absolute h-5 w-5 border-white/50 ${position}`}
        />
      ))}

      {/* diagonal crop marks */}
      <svg className="absolute inset-0 h-full w-full text-line" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
      </svg>

      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2"
      >
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/50" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/50" />
      </motion.div>

      <span className="absolute bottom-4 left-4 text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
        {label}
      </span>
      <span className="absolute right-4 top-4 text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
        Coming Soon
      </span>
    </div>
  );
}
