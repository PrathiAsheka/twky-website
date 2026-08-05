"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type MouseEvent } from "react";

const MERIDIANS = [0, 30, 60, 90, 120, 150];

const NODES = [
  { top: "28%", rotateY: 15, delay: 0 },
  { top: "50%", rotateY: 120, delay: 0.7 },
  { top: "62%", rotateY: 230, delay: 1.4 },
  { top: "38%", rotateY: 310, delay: 2.1 },
];

export default function GlobeVisual() {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const px = useMotionValue(200);
  const py = useMotionValue(200);

  const rotateX = useSpring(useTransform(my, [0, 1], [16, -16]), {
    stiffness: 100,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-16, 16]), {
    stiffness: 100,
    damping: 20,
  });
  const spotX = useSpring(px, { stiffness: 70, damping: 22 });
  const spotY = useSpring(py, { stiffness: 70, damping: 22 });

  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${spotX}px ${spotY}px, rgba(255,255,255,0.16), transparent 70%)`;

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    mx.set(x);
    my.set(y);
    px.set(x * rect.width);
    py.set(y * rect.height);
  };

  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
    px.set(200);
    py.set(200);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="relative mx-auto aspect-square w-full max-w-lg select-none"
      style={{ perspective: 1100 }}
    >
      {/* ambient glow */}
      <div className="absolute inset-[14%] rounded-full bg-white opacity-[0.06] blur-[100px]" />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        {/* static orbit ring, tilts with cursor but doesn't spin */}
        <div
          className="absolute inset-[4%] rounded-full border border-white/10"
          style={{ transform: "rotateX(75deg)" }}
        />

        {/* auto-rotating sphere */}
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[14%]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* silhouette */}
          <div className="absolute inset-0 rounded-full border border-white/40" />

          {/* faint core glow for volume */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.12), rgba(255,255,255,0) 62%)",
            }}
          />

          {/* meridians */}
          {MERIDIANS.map((deg) => (
            <div
              key={deg}
              className="absolute inset-0 rounded-full border border-white/20"
              style={{ transform: `rotateY(${deg}deg)` }}
            />
          ))}

          {/* equator */}
          <div
            className="absolute inset-0 rounded-full border border-white/25"
            style={{ transform: "rotateX(90deg)" }}
          />

          {/* network nodes */}
          {NODES.map((node) => (
            <motion.span
              key={node.rotateY}
              animate={{ opacity: [0.25, 1, 0.25] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: node.delay,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.65)]"
              style={{
                top: node.top,
                transform: `rotateY(${node.rotateY}deg) translateZ(105px)`,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* mouse-follow light sweep */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-full mix-blend-screen"
        style={{ background: spotlight }}
      />
    </div>
  );
}
