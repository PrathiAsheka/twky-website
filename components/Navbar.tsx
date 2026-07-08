"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { CTA_LABEL, NAV_LINKS } from "@/lib/navigation";
import MagneticButton from "@/components/MagneticButton";

const mobileListVariants: Variants = {
  open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
  closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};

const mobileItemVariants: Variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -16 },
};

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [lastPathname, setLastPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        isScrolled ? "border-line bg-black/90" : "border-line/60 bg-black/50"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="shrink-0" aria-label="They Will Know You — Home">
          <Image
            src="/logo.jpeg"
            alt="They Will Know You"
            width={112}
            height={112}
            priority
            unoptimized
            className="h-12 w-12 object-contain lg:h-14 lg:w-14"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => link.children && setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={`group relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href) ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100 ${
                    isActive(link.href) ? "scale-x-100" : ""
                  }`}
                />
              </Link>

              <AnimatePresence>
                {link.children && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2 rounded-2xl border border-line bg-surface/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <MagneticButton href="/contact">{CTA_LABEL}</MagneticButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <motion.span
            animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-white"
          />
          <motion.span
            animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-px w-6 bg-white"
          />
          <motion.span
            animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-white"
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-surface/95 backdrop-blur-xl lg:hidden"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileListVariants}
              className="flex flex-col gap-1 px-6 py-6"
            >
              {NAV_LINKS.map((link) => (
                <motion.li key={link.href} variants={mobileItemVariants}>
                  <Link
                    href={link.href}
                    className={`block py-3 text-lg font-medium ${
                      isActive(link.href) ? "text-white" : "text-white/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <ul className="ml-4 flex flex-col gap-1 border-l border-white/10 pl-4">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-2 text-sm text-white/50"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
              <motion.li variants={mobileItemVariants} className="pt-4">
                <MagneticButton href="/contact" fullWidth>
                  {CTA_LABEL}
                </MagneticButton>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
