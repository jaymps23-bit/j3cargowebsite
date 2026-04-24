// J3 Cargo - Business Constants & Asset URLs
// Design: Afro-Modern Premium — Forest Green + Gold + Cream

export const BUSINESS = {
  name: "J3 Cargo Services",
  tagline: "UK to Nigeria Shipping — Fast, Reliable, Stress-Free",
  phone: "+44 78 2371 8667",
  email: "info@j3cargo.com",
  altEmail: "j3cargo@gmail.com",
  whatsapp: "https://wa.me/447823718667",
  address: "429-431 Wick Lane, Bow, London",
  instagram: "https://www.instagram.com/j3cargo/",
  facebook: "https://www.facebook.com/J3CargoServices/",
} as const;

export const IMAGES = {
  logo: "/logo.png",
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663398925180/diKjdrMj3DyVftmArVy6xQ/hero-banner-M9GiCtgN6YNRH5xLFH2VBn.webp",
  heroFull: "https://d2xsxph8kpxj0f.cloudfront.net/310519663398925180/diKjdrMj3DyVftmArVy6xQ/hero-banner-W5fP2kXThphom35q2Wsamz.png",
  airFreight: "https://d2xsxph8kpxj0f.cloudfront.net/310519663398925180/diKjdrMj3DyVftmArVy6xQ/services-air-freight-mZzTEcrowNkJfMWwshTgFe.webp",
  aboutTeam: "https://d2xsxph8kpxj0f.cloudfront.net/310519663398925180/diKjdrMj3DyVftmArVy6xQ/about-team-QSdh9fXTRwp4HUDoPS4UwA.webp",
  seaFreight: "https://d2xsxph8kpxj0f.cloudfront.net/310519663398925180/diKjdrMj3DyVftmArVy6xQ/sea-freight-6JXfyA3LKXvvPGeEAfjo22.webp",
  lagos: "https://d2xsxph8kpxj0f.cloudfront.net/310519663398925180/diKjdrMj3DyVftmArVy6xQ/nigeria-lagos-PnYvx3f8C8uS24uTVwQZXV.webp",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Routes", href: "/routes" },
  { label: "Rates", href: "/rates" },
  { label: "Track", href: "/track" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "air-freight",
    title: "Air Freight",
    shortDesc: "5–7 working days to Lagos",
    description: "Swift and secure air freight from the UK to Nigeria. Your parcels arrive in Lagos within 5–7 working days, with door-to-door tracking every step of the way.",
    icon: "Plane",
    features: ["5–7 day delivery to Lagos", "Real-time tracking", "Free collection in London", "Door-to-door service"],
  },
  {
    id: "sea-freight",
    title: "Sea Freight",
    shortDesc: "Cost-effective for large shipments",
    description: "The smart choice for heavy or bulky items. We ship vehicles, appliances, and large cargo by sea with full container or shared container options.",
    icon: "Ship",
    features: ["Vehicles & heavy goods", "Full or shared containers", "Competitive rates", "Customs handled"],
  },
  {
    id: "packaging",
    title: "Packaging",
    shortDesc: "Professional repackaging for safe transit",
    description: "Every parcel is expertly repackaged at our London warehouse before shipping. We use reinforced materials to protect your goods during the journey.",
    icon: "Package",
    features: ["Reinforced packaging", "Fragile item handling", "Weight optimization", "Free at our warehouse"],
  },
  {
    id: "customs-clearance",
    title: "Customs Clearance",
    shortDesc: "Licensed agents in Nigeria",
    description: "Our licensed customs agents in Nigeria handle all clearance paperwork. Air freight clears in 2 days, container shipments in 5 days — no hassle for you.",
    icon: "FileCheck",
    features: ["Licensed Nigerian agents", "2-day air freight clearing", "5-day container clearing", "Full documentation support"],
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Register Your Parcel",
    description: "Drop off or schedule a free collection. We log your shipment into our tracking system immediately.",
  },
  {
    step: 2,
    title: "Repackage & Secure",
    description: "Our team professionally repackages your items with reinforced materials for safe transit.",
  },
  {
    step: 3,
    title: "Ship to Nigeria",
    description: "Your cargo travels by air or sea. Track its journey in real time from London to your destination.",
  },
  {
    step: 4,
    title: "Deliver to Your Door",
    description: "Cleared through customs and delivered directly to any address across Nigeria.",
  },
] as const;

export const FAQ_DATA = [
  {
    question: "How long does air freight take to Nigeria?",
    answer: "Air freight from the UK to Lagos takes 7–10 working days. For destinations outside Lagos, add an additional 2–3 days. We provide real-time tracking so you can monitor your shipment every step of the way.",
  },
  {
    question: "What is the minimum cargo weight for air freight?",
    answer: "The minimum cargo weight is 8kg at £60. For shipments over 8kg, the rate is £6 per kg plus a £15 handling fee. We also offer bespoke pricing for hazardous materials and special shipments.",
  },
  {
    question: "Do you collect parcels from customers?",
    answer: "Yes, we provide free cargo collection from London addresses. We can arrange pickups from your home or business. Outside London, collection fees may apply. Contact us to arrange a pickup time.",
  },
  {
    question: "What are your sea freight rates and timelines?",
    answer: "Sea freight takes 4–6 weeks from the UK to Nigeria. Rates vary depending on your destination and shipment size. We offer both full container loads (FCL) and less-than-container loads (LCL). Contact us for a detailed quote.",
  },
  {
    question: "How long does customs clearance take in Nigeria?",
    answer: "Our licensed customs agents clear air freight shipments in 2 days and container shipments in 5 days. We handle all documentation and paperwork so you don't have to worry about delays.",
  },
  {
    question: "Do you handle hazardous materials?",
    answer: "Yes, we offer bespoke shipping solutions for hazardous materials. These require special handling, packaging, and documentation. Contact us for a custom quote and to discuss your specific requirements.",
  },
  {
    question: "What items are prohibited from shipping to Nigeria?",
    answer: "Prohibited items include used electronics (over 5 years old), certain food products, pharmaceuticals without proper licensing, weapons, and counterfeit goods. For a complete list, check our blog or contact us before shipping.",
  },
  {
    question: "Do you offer shipping insurance?",
    answer: "Yes, we offer optional cargo insurance for additional protection. Insurance rates depend on the value and nature of your shipment. Ask our team for a quote when you request your shipping rate.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, card payments, and cash on collection. For international shipments, we can arrange payment through WhatsApp or email. Contact us for your preferred payment method.",
  },
  {
    question: "Can I track my shipment in real time?",
    answer: "Yes, all shipments include real-time tracking. You'll receive updates from pickup in London through to delivery in Nigeria. Use our tracking page or contact us for your shipment reference number.",
  },
] as const;
