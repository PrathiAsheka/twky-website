export interface NavSubLink {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavSubLink[];
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Execution Suite", href: "/services/execution" },
      { label: "Paid Media", href: "/services/paid-media" },
      { label: "Advanced Consulting", href: "/services/advanced-consulting" },
    ],
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    children: [
      { label: "Nadeesha Koralage", href: "/case-studies/nadeesha-koralage" },
      { label: "Ceylon Wedding Planners", href: "/case-studies/ceylon-wedding-planners" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [{ label: "Leadership", href: "/about/leadership" }],
  },
  { label: "Contact", href: "/contact" },
];

export interface Hotline {
  name: string;
  number: string;
}

export const CONTACT_INFO = {
  email: "cs@theywillknowyou.com",
  address: "71B Dutugemunu Street, Kalubowila, Dehiwala",
  hotlines: [
    { name: "Chamodya", number: "070 605 0123" },
    { name: "Saduka", number: "077 128 2564" },
    { name: "Resandu", number: "077 071 6765" },
  ] satisfies Hotline[],
};

export const CTA_LABEL = "Schedule a Strategy Audit";
