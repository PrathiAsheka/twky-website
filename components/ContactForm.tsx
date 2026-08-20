"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/lib/navigation";
import { fadeUpItem } from "@/lib/motion";
import { trackEvent } from "@/lib/analytics";

const INTENT_OPTIONS = [
  "Full Funnel Audit",
  "Paid Media Management",
  "Content Strategy & Creative Direction",
  "Social Media Management",
];

const WEB3FORMS_ACCESS_KEY = "ce57a494-bfda-4140-b998-3ed9243fe58c";

const inputClasses =
  "w-full border-b border-line bg-transparent py-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [intent, setIntent] = useState(INTENT_OPTIONS[0]);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          subject: "New Lead Submission from theywillknowyou.com",
          from_name: "TWKY Website Contact Form",
          name,
          email,
          phone,
          company_website: company,
          service_interest: intent,
          message: `Service interest: ${intent}\nPhone: ${phone || "Not provided"}\nCompany website: ${company || "Not provided"}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setIntent(INTENT_OPTIONS[0]);

        trackEvent("generate_lead", {
          form_name: "contact_form",
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
        disabled={status === "loading"}
        className="mt-4 inline-flex w-fit items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:shadow-none"
      >
        {status === "loading" ? "Sending message..." : "Send Enquiry"}
      </button>

      {status === "success" && (
        <p className="text-sm text-white/70">
          Thank you! Your message has been sent to our team.
        </p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-400">
          Oops, something went wrong. Please try again or email{" "}
          {CONTACT_INFO.email} directly.
        </p>
      )}
    </motion.form>
  );
}
