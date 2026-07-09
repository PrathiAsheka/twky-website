"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

const PreloaderContext = createContext(false);

export function usePreloader() {
  return useContext(PreloaderContext);
}

const SESSION_KEY = "twky-preloader-shown";
const LOGO_LINES = ["They", "Will", "Know", "You."];
// staggerChildren + delayChildren + child duration below are tuned to land
// the full logo animation at ~1.2s, matching EXIT_DELAY_MS's buffer.
const EXIT_DELAY_MS = 1400;

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const line: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function PreloaderProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  // Guards against React Strict Mode's double effect invocation: the first
  // invocation's sessionStorage write must not be visible to the second.
  const hasShownBeforeRef = useRef<boolean | null>(null);

  useEffect(() => {
    if (hasShownBeforeRef.current === null) {
      hasShownBeforeRef.current =
        sessionStorage.getItem(SESSION_KEY) === "true";
      sessionStorage.setItem(SESSION_KEY, "true");
    }

    const timer = setTimeout(
      () => setIsLoading(false),
      hasShownBeforeRef.current ? 0 : EXIT_DELAY_MS,
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <PreloaderContext.Provider value={isLoading}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center text-center"
            >
              {LOGO_LINES.map((word) => (
                <motion.span
                  key={word}
                  variants={line}
                  className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </PreloaderContext.Provider>
  );
}
