"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUpItem } from "@/lib/motion";

const cardVariants: Variants = {
  rest: { backgroundColor: "#0D0D0D", borderColor: "#262626" },
  hover: { backgroundColor: "#FFFFFF", borderColor: "#FFFFFF" },
};

const indexVariants: Variants = {
  rest: { color: "rgba(255,255,255,0.3)" },
  hover: { color: "rgba(0,0,0,0.4)" },
};

const titleVariants: Variants = {
  rest: { color: "#FFFFFF" },
  hover: { color: "#000000" },
};

const descriptionVariants: Variants = {
  rest: { color: "rgba(255,255,255,0.55)" },
  hover: { color: "rgba(0,0,0,0.7)" },
};

const transition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

interface CardProps {
  index?: string;
  title: string;
  description?: string;
  className?: string;
}

export default function Card({
  index,
  title,
  description,
  className = "",
}: CardProps) {
  return (
    <motion.div variants={fadeUpItem} className={className}>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={cardVariants}
        transition={transition}
        className="flex h-full cursor-default flex-col gap-4 border p-8"
      >
        {index && (
          <motion.span
            variants={indexVariants}
            transition={transition}
            className="text-xs font-semibold tracking-[0.2em]"
          >
            {index}
          </motion.span>
        )}
        <motion.h3
          variants={titleVariants}
          transition={transition}
          className="text-lg font-bold tracking-tight"
        >
          {title}
        </motion.h3>
        {description && (
          <motion.p
            variants={descriptionVariants}
            transition={transition}
            className="text-sm leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}
