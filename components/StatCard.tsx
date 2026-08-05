"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUpItem } from "@/lib/motion";

const cardVariants: Variants = {
  rest: { backgroundColor: "#0D0D0D", borderColor: "#262626" },
  hover: { backgroundColor: "#FFFFFF", borderColor: "#FFFFFF" },
};

const iconVariants: Variants = {
  rest: { color: "rgba(255,255,255,0.5)" },
  hover: { color: "rgba(0,0,0,0.5)" },
};

const valueVariants: Variants = {
  rest: { color: "#FFFFFF" },
  hover: { color: "#000000" },
};

const labelVariants: Variants = {
  rest: { color: "rgba(255,255,255,0.6)" },
  hover: { color: "rgba(0,0,0,0.65)" },
};

const descriptionVariants: Variants = {
  rest: { color: "rgba(255,255,255,0.4)" },
  hover: { color: "rgba(0,0,0,0.55)" },
};

const transition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

interface StatCardProps {
  icon?: ReactNode;
  value: string;
  label: string;
  description?: string;
}

export default function StatCard({
  icon,
  value,
  label,
  description,
}: StatCardProps) {
  return (
    <motion.div variants={fadeUpItem} className="h-full">
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={cardVariants}
        transition={transition}
        className="flex h-full cursor-default flex-col gap-3 border p-6 sm:p-8"
      >
        {icon && (
          <motion.div variants={iconVariants} transition={transition}>
            {icon}
          </motion.div>
        )}
        <motion.span
          variants={valueVariants}
          transition={transition}
          className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-none tracking-tight"
        >
          {value}
        </motion.span>
        <motion.span
          variants={labelVariants}
          transition={transition}
          className="text-xs font-medium uppercase tracking-[0.2em]"
        >
          {label}
        </motion.span>
        {description && (
          <motion.p
            variants={descriptionVariants}
            transition={transition}
            className="mt-1 text-xs leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}
