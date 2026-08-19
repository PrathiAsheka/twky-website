"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState, type MouseEvent, type ReactNode } from "react";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

export default function MagneticButton({
  href,
  children,
  className = "",
  fullWidth = false,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.35, y: y * 0.35 });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
      className={fullWidth ? "block" : "inline-block"}
    >
      <Link
        href={href}
        onClick={onClick}
        className={`relative inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-center text-sm font-semibold text-black transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] ${
          fullWidth ? "w-full" : ""
        } ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
