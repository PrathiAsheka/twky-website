"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/lib/navigation";
import { fadeUpItem } from "@/lib/motion";
import { trackLead } from "@/lib/analytics";

const INTENT_OPTIONS = [
  "Full Funnel Audit",
  "Paid Media Management",
  "Content Strategy & Creative Direction",
  "Social Media Management",
];

const inputClasses =
  "w-full border-b border-line bg-transparent py-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [intent, setIntent] = useState(INTENT_OPTIONS[0]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`New enquiry: ${intent}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany Website: ${company}\nIntent: ${intent}`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    trackLead(intent);
    setSubmitted(true);
  };

  return (
    <motion.form
      variants={fadeUpItem}
      onSubmit={handleSubmit}
      className="flex flex-col gap-8"
    >
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-xs uppercase tracking-[0.2em] text-white/40"
          >
            Name
          </label>
          <input
            id="name"
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
            htmlFor="email"
            className="text-xs uppercase tracking-[0.2em] text-white/40"
          >
            Email
          </label>
          <input
            id="email"
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
            htmlFor="phone"
            className="text-xs uppercase tracking-[0.2em] text-white/40"
          >
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClasses}
            placeholder="+94 ..."
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="text-xs uppercase tracking-[0.2em] text-white/40"
          >
            Company Website
          </label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={inputClasses}
            placeholder="yourcompany.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="intent"
          className="text-xs uppercase tracking-[0.2em] text-white/40"
        >
          I&apos;m interested in
        </label>
        <select
          id="intent"
          value={intent}
          onChange={(e) => setIntent(e.target.value)}
          className="w-full border-b border-line bg-transparent py-3 text-white focus:border-white focus:outline-none [&>option]:bg-black"
        >
          {INTENT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="mt-4 inline-flex w-fit items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(255,255,255,0.35)]"
      >
        Send Enquiry
      </button>

      {submitted && (
        <p className="text-sm text-white/50">
          Your email client should now be open with your message pre-filled —
          send it across and we&apos;ll be in touch.
        </p>
      )}
    </motion.form>
  );
}
