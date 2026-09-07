"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUpContainer, fadeUpItem } from "@/lib/motion";
import { trackEvent } from "@/lib/analytics";
import { CONTACT_INFO } from "@/lib/navigation";
import {
  LinkedInIcon,
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
} from "@/components/icons/SocialIcons";

interface SocialLink {
  label: string;
  href: string;
  Icon: typeof LinkedInIcon;
}

const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: "#", Icon: LinkedInIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "TikTok", href: "#", Icon: TikTokIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
];

const WEB3FORMS_ACCESS_KEY = "ce57a494-bfda-4140-b998-3ed9243fe58c";

const inputClasses =
  "w-full border-b border-line bg-transparent py-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors";

type SubmitStatus = "idle" | "loading" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ConnectClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name.trim() === "") {
      setValidationError("Please enter your name.");
      return;
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      setValidationError("Please enter a valid email address.");
      return;
    }

    setValidationError(null);
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Business Card Lead — theywillknowyou.com/connect",
          from_name: "TWKY Business Card",
          replyto: email,
          name,
          email,
          phone,
          company_project: company,
          message: `Company/Project: ${company || "Not provided"}\nQuick note: ${note || "Not provided"}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setNote("");

        trackEvent("business_card_lead_submission", {
          form_name: "business_card_connect",
          page_location: window.location.href,
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] items-center justify-center bg-black px-6 py-16">
      <motion.div
        variants={fadeUpContainer}
        initial="hidden"
        animate="show"
        className="w-full max-w-md"
      >
        <motion.div
          variants={fadeUpItem}
          className="rounded-3xl border border-line bg-surface p-8 sm:p-10"
        >
          <div className="flex flex-col items-center text-center">
            <Image
              src="/logo.jpeg"
              alt="They Will Know You"
              width={112}
              height={112}
              unoptimized
              className="h-16 w-16 object-contain"
            />
            <h1 className="mt-6 text-2xl font-bold tracking-tight text-white">
              They Will Know You
            </h1>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              We don&apos;t just market. We build influence. Save our
              details, follow along, or send us a quick note below.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-white/70 transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="mt-10 border-t border-line pt-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Let&apos;s Connect
            </h2>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6">
              <div>
                <label
                  htmlFor="cc-name"
                  className="text-xs uppercase tracking-[0.2em] text-white/40"
                >
                  Name
                </label>
                <input
                  id="cc-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClasses}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="cc-email"
                  className="text-xs uppercase tracking-[0.2em] text-white/40"
                >
                  Email
                </label>
                <input
                  id="cc-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClasses}
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="cc-phone"
                  className="text-xs uppercase tracking-[0.2em] text-white/40"
                >
                  Phone
                </label>
                <input
                  id="cc-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClasses}
                  placeholder="+94 ..."
                />
              </div>

              <div>
                <label
                  htmlFor="cc-company"
                  className="text-xs uppercase tracking-[0.2em] text-white/40"
                >
                  Company / Project
                </label>
                <input
                  id="cc-company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={inputClasses}
                  placeholder="Where you're building"
                />
              </div>

              <div>
                <label
                  htmlFor="cc-note"
                  className="text-xs uppercase tracking-[0.2em] text-white/40"
                >
                  Quick Note
                </label>
                <textarea
                  id="cc-note"
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell us a little about what you need"
                />
              </div>

              {validationError && (
                <p className="text-sm text-red-400">{validationError}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:shadow-none"
              >
                {status === "loading" ? "Sending..." : "Send Note"}
              </button>

              {status === "success" && (
                <p className="text-center text-sm text-white/70">
                  Thank you! Your message has been sent to our team.
                </p>
              )}

              {status === "error" && (
                <p className="text-center text-sm text-red-400">
                  Oops, something went wrong. Please try again or email{" "}
                  {CONTACT_INFO.email} directly.
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
