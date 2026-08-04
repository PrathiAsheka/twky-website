"use client";

import { motion } from "framer-motion";
import { fadeUpItem } from "@/lib/motion";

interface TeamCardProps {
  name: string;
  role: string;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TeamCard({ name, role }: TeamCardProps) {
  return (
    <motion.div
      variants={fadeUpItem}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col gap-6 border border-line bg-surface p-8 transition-colors duration-300 hover:border-white/30"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-line text-sm font-semibold tracking-widest text-white/70 transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
        {getInitials(name)}
      </div>

      <div>
        <h3 className="text-xl font-bold tracking-tight text-white">
          {name}
        </h3>
        <span className="mt-1 inline-block text-xs font-medium uppercase tracking-[0.2em] text-white/40">
          {role}
        </span>
      </div>
    </motion.div>
  );
}
