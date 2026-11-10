import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { toSriLankaE164, CONTACT_INFO, NAV_LINKS } from "@/lib/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {/* Column 1: Brand */}
        <div className="lg:pr-6">
          <Link href="/" className="inline-block" aria-label="They Will Know You — Home">
            <Image
              src="/logo.jpeg"
              alt="They Will Know You"
              width={112}
              height={112}
              className="h-14 w-14 object-contain"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
            We don&apos;t just market. We build influence.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Quick Links
          </p>
          <ul className="mt-5 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Direct Hotlines */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Direct Hotlines
          </p>
          <ul className="mt-5 flex flex-col gap-3">
            {CONTACT_INFO.hotlines.map((line) => (
              <li key={line.name} className="flex items-start gap-2 text-sm text-white/60">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/40" aria-hidden />
                <span>
                  {line.name}:{" "}
                  <a
                    href={`tel:${toSriLankaE164(line.number)}`}
                    className="transition-colors hover:text-white"
                  >
                    {line.number}
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: HQ Location */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Headquarters
          </p>
          <div className="mt-5 flex flex-col gap-4 text-sm text-white/60">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" aria-hidden />
              <span>{CONTACT_INFO.address}</span>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/40" aria-hidden />
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="transition-colors hover:text-white"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal row */}
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 pb-28 pt-6 text-center text-xs text-white/35 sm:flex-row sm:pb-6 sm:text-left lg:px-10">
          <p>&copy; {year} They Will Know You (TWKY) Branding. All rights reserved.</p>
          <p>This site and its contents are confidential and proprietary to TWKY.</p>
        </div>
      </div>
    </footer>
  );
}
