export interface KBEntry {
  id: string;
  keywords: string[];
  answer: string;
  link?: { label: string; href: string };
}

// Sourced from the three brand documents: TWKY BRANDING 03.pdf,
// Scope of Services.pdf, and the Digital Portfolio PDF. No fabricated
// facts — every figure and claim here traces back to those documents.
export const KNOWLEDGE_BASE: KBEntry[] = [
  {
    id: "services-overview",
    keywords: [
      "what services",
      "what do you do",
      "what do you offer",
      "services do you offer",
      "what can you do",
    ],
    answer:
      "We offer Social Media Management, Content Strategy & Creative Direction, Brand Positioning & Audience Targeting, Paid Media Strategy & Execution, and Digital Marketing Consultation.",
    link: { label: "Explore Our Services", href: "/services" },
  },
  {
    id: "full-scope",
    keywords: [
      "full scope",
      "everything you do",
      "all your services",
      "scope of services",
      "categories of service",
    ],
    answer:
      "Our full scope spans eight areas: Strategy & Planning, Content Creation, Social Media Management, Paid Advertising & Growth, Performance & Optimization, Branding & Consulting, Copywriting & Communication, and Reporting & Strategy Iteration.",
    link: { label: "View Services", href: "/services" },
  },
  {
    id: "process",
    keywords: [
      "process",
      "workflow",
      "how do you work",
      "how it works",
      "steps",
    ],
    answer:
      "Our process runs in seven steps: Content Creation, Editing, Internal Review, Caption + Hook Review, Client Approval, Final Optimization, and Publishing. It's a structured, repeatable workflow, not guesswork.",
    link: { label: "See Our Approach", href: "/services" },
  },
  {
    id: "approach-pillars",
    keywords: [
      "approach",
      "pillars",
      "methodology",
      "how do you grow",
      "growth system",
    ],
    answer:
      "Our approach rests on four pillars: Strategy (strategy-first thinking guides priorities), Content (platform-native execution tailored per channel), Distribution (multi-channel publishing connects audiences), and Optimisation (data-backed decisions refine performance).",
  },
  {
    id: "pricing",
    keywords: [
      "price",
      "pricing",
      "cost",
      "how much",
      "rates",
      "budget",
      "fees",
    ],
    answer:
      "Pricing depends on your goals and the scope you need — we don't publish flat rates. Get in touch and we'll put together a tailored quote based on a Full Funnel Audit, Paid Media Management, Content Strategy, or Social Media Management scope.",
    link: { label: "Contact Us", href: "/contact" },
  },
  {
    id: "contact-info",
    keywords: [
      "contact",
      "phone number",
      "email",
      "reach you",
      "get in touch",
      "call you",
    ],
    answer:
      "You can reach us at cs@theywillknowyou.com, or call Chamodya (070 605 0123), Saduka (077 128 2564), or Resandu (077 071 6765). Our office is at 71B Dutugemunu Street, Kalubowila, Dehiwala.",
    link: { label: "Contact Page", href: "/contact" },
  },
  {
    id: "location",
    keywords: ["location", "address", "office", "where are you", "based"],
    answer:
      "Our office is located at 71B Dutugemunu Street, Kalubowila, Dehiwala, Sri Lanka.",
  },
  {
    id: "vision",
    keywords: ["vision", "long term goal"],
    answer:
      "Our vision is to position TWKY Branding as a leading digital marketing partner in Sri Lanka, known for building distinctive brands, elevating digital presence, and setting a higher standard in modern brand communication.",
    link: { label: "About Us", href: "/about" },
  },
  {
    id: "mission",
    keywords: ["mission", "purpose"],
    answer:
      "Our mission is to deliver carefully crafted content and refined marketing strategies that help our clients stand out with clarity and credibility, while building long-term influence and sustainable growth.",
    link: { label: "About Us", href: "/about" },
  },
  {
    id: "who-we-are",
    keywords: [
      "who are you",
      "about twky",
      "about the company",
      "who is twky",
      "tell me about",
    ],
    answer:
      "We're a results-driven digital growth partner focused on turning attention into trust and trust into measurable growth. We combine strategy, creativity, and performance marketing to build brands that scale.",
    link: { label: "About Us", href: "/about" },
  },
  {
    id: "leadership",
    keywords: [
      "leadership",
      "team",
      "founders",
      "who runs",
      "who founded",
      "staff",
    ],
    answer:
      "TWKY is led by co-founders Chamodya Maduranga Kaldera and Saduka Sachintha, along with Resandu Samadith (Operations & Strategy), Disara Aluthge (Business Development), and Prathibha Dissanayake (Intern — IT & Digital Marketing).",
    link: { label: "Meet the Team", href: "/about/leadership" },
  },
  {
    id: "case-studies-overview",
    keywords: [
      "case studies",
      "clients",
      "who have you worked with",
      "past work",
      "portfolio",
      "examples",
    ],
    answer:
      "We've worked across Education & Personal Brands, Luxury & Wedding Brands, Consulting Clients, and Scaling Businesses. A featured case study is Nadeesha Koralage (education).",
    link: { label: "View Case Studies", href: "/case-studies" },
  },
  {
    id: "nadeesha-stats",
    keywords: [
      "nadeesha",
      "koralage",
      "tutor",
      "business studies",
      "education case study",
    ],
    answer:
      "Nadeesha Koralage, an Advanced Level Business Studies Tutor, has been a client since 2024. On Facebook alone he's generated 11Mn+ video views, 2Mn+ total reach, and 600K+ interactions, with strong results on TikTok and Instagram too.",
    link: {
      label: "Read the Full Case Study",
      href: "/case-studies/nadeesha-koralage",
    },
  },
  {
    id: "sectors",
    keywords: [
      "industries",
      "sectors",
      "who do you work with",
      "types of brands",
      "niches",
    ],
    answer:
      "We partner with brands across four sectors: Education & Personal Brands, Luxury & Wedding Brands, Consulting Clients, and Scaling Businesses.",
    link: { label: "See Sectors", href: "/case-studies" },
  },
  {
    id: "paid-media",
    keywords: [
      "paid media",
      "ads",
      "advertising",
      "facebook ads",
      "instagram ads",
      "ad spend",
    ],
    answer:
      "Our paid media work covers Paid Media Management, Paid Media Audits, and Paid Media Strategy Development — built on funnel-based campaign structures, systematic creative testing, and continuous optimisation systems.",
    link: { label: "Paid Media Services", href: "/services/paid-media" },
  },
  {
    id: "consulting",
    keywords: [
      "consulting",
      "advisory",
      "brand positioning",
      "strategy consulting",
    ],
    answer:
      "Our advanced consulting covers Audience Clarity, Brand Positioning, and Content Direction, plus personal branding strategy, social media audits, and growth consultation.",
    link: {
      label: "Advanced Consulting",
      href: "/services/advanced-consulting",
    },
  },
  {
    id: "execution",
    keywords: [
      "content creation",
      "video production",
      "copywriting",
      "execution suite",
      "publishing",
    ],
    answer:
      "Our Execution Suite covers weekly content planning & scripting, video production management, high-converting copywriting, multi-platform publishing, and performance tracking & reporting.",
    link: { label: "Execution Suite", href: "/services/execution" },
  },
  {
    id: "get-started",
    keywords: [
      "get started",
      "start working",
      "how do i begin",
      "hire you",
      "work with you",
      "strategy audit",
    ],
    answer:
      "The best first step is a Strategy Audit — tell us where you're starting from on our contact page and our team will follow up with next steps.",
    link: { label: "Schedule a Strategy Audit", href: "/contact" },
  },
  {
    id: "philosophy",
    keywords: [
      "philosophy",
      "what makes you different",
      "why choose you",
      "difference",
    ],
    answer:
      "Strategy without execution is theory. Execution without strategy is noise. We deliver both — combining structured, repeatable systems with the creative execution to back them up.",
  },
];

const FALLBACK_ANSWER =
  "I don't have an answer for that yet. For anything specific, reach out directly and our team will help.";

export function findAnswer(query: string): KBEntry | null {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return null;

  let bestMatch: KBEntry | null = null;
  let bestScore = 0;

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (normalizedQuery.includes(keyword)) {
        score += keyword.split(" ").length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  return bestScore > 0 ? bestMatch : null;
}

export { FALLBACK_ANSWER };

export const SUGGESTED_QUESTIONS = [
  "What services do you offer?",
  "How much does it cost?",
  "Tell me about your case studies",
  "How do I get started?",
  "How can I contact you?",
];
