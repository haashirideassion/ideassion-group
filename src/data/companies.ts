export interface Company {
  name: string;
  tagline: string;
  description: string;
  url: string;
  logoPath: string;
  isTriton?: boolean;
}

export const companies: Company[] = [
  {
    name: "Ideassion Technology Solutions",
    tagline: "Cloud, AI & Engineering Excellence",
    description: "Enterprise digital modernisation powered by AI — cloud infrastructure, product engineering, and managed services for mid-sized businesses.",
    url: "https://ideassion.com",
    logoPath: "/logos/ideassion.png",
  },
  {
    name: "Ideassion Institute for Talent Transformation",
    tagline: "Shaping Tomorrow's Leaders",
    description: "Corporate training and leadership development programmes that transform talent across functions and levels.",
    url: "https://ideassionitt.com",
    logoPath: "/logos/iitt.png",
  },
  {
    name: "CruxCreations",
    tagline: "End-to-End Creative & Digital",
    description: "Full-service digital marketing and creative agency — branding, web development, social media, print, and event management.",
    url: "https://www.cruxcreations.com",
    logoPath: "/logos/crux.svg",
  },
  {
    name: "Dizrupt",
    tagline: "Ship Software That Works. This Week.",
    description: "Rapid software delivery studio focused on getting reliable products to market fast — without the delays.",
    url: "https://dizrupt.vercel.app",
    logoPath: "/logos/dizrupt.png",
  },
  {
    name: "Coverton",
    tagline: "Insuring Business, Ensuring Success",
    description: "Insurance broking intermediary bridging businesses and individuals with the right cover — corporate, retail, and industry-specific.",
    url: "https://coverton.in",
    logoPath: "/logos/coverton.svg",
  },
  {
    name: "Triton Labs",
    tagline: "Build Operations with Triton Tech",
    description: "AI and IoT solutions for manufacturing, logistics, and construction — computer vision, edge computing, and industrial automation.",
    url: "https://www.tritonlabs.in",
    logoPath: "/logos/triton.png",
    isTriton: true,
  },
];
