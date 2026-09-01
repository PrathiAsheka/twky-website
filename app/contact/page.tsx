import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { CONTACT_INFO } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Let's Build Your Growth System.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Your Growth System."
        description="Tell us where you're starting from, and we'll get back to you with next steps."
      />

      <Section eyebrow="Get In Touch">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.3fr_1fr]">
          <ContactForm />

          <div className="flex flex-col gap-10 border-t border-line pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                Direct Hotlines
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {CONTACT_INFO.hotlines.map((line) => (
                  <li
                    key={line.name}
                    className="flex items-start gap-2 text-sm text-white/60"
                  >
                    <Phone
                      className="mt-0.5 h-4 w-4 shrink-0 text-white/40"
                      aria-hidden
                    />
                    <span>
                      {line.name}:{" "}
                      <a
                        href={`tel:${line.number.replace(/\s+/g, "")}`}
                        className="transition-colors hover:text-white"
                      >
                        {line.number}
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                Headquarters
              </h3>
              <div className="mt-5 flex flex-col gap-4 text-sm text-white/60">
                <div className="flex items-start gap-2">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-white/40"
                    aria-hidden
                  />
                  <span>{CONTACT_INFO.address}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-white/40"
                    aria-hidden
                  />
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
        </div>
      </Section>
    </>
  );
}
