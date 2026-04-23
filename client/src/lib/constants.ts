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
  logo: "/manus-storage/j3cargo-logo_94077b7e.jpeg",
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
    answer: "Our transit time to Lagos is 5–7 working days from Friday. Deliveries outside Lagos take 7–10 working days.",
  },
  {
    question: "Is there a minimum cargo weight?",
    answer: "No minimum weight requirement. However, we have a fixed minimum charge for shipments under 10kg (from £55 to Lagos).",
  },
  {
    question: "Do you collect parcels from customers?",
    answer: "Yes. We provide free cargo collection within the London area. For locations outside London, collection can be arranged at a small additional fee.",
  },
  {
    question: "Is duty on commercial goods included in the price?",
    answer: "No, customs duty is not included in our shipping rates. Duty is payable by the receiver in Nigeria based on the goods being imported. We can advise on expected duty costs.",
  },
  {
    question: "How regular is your sea freight service?",
    answer: "We run regular sea freight shipments. Container loading schedules vary, so contact us for the next available sailing date.",
  },
  {
    question: "Do you handle hazardous shipments?",
    answer: "We do not ship hazardous materials, flammable goods, or items prohibited by UK/Nigerian customs regulations.",
  },
  {
    question: "Do you offer freight insurance?",
    answer: "Yes, we offer optional cargo insurance for additional peace of mind. Ask our team for a quote when booking your shipment.",
  },
  {
    question: "Can I ship food, cosmetics, or medicines?",
    answer: "Yes, with restrictions. Food items must be properly sealed and non-perishable. Cosmetics and medicines require proper labelling. Some items may need NAFDAC clearance in Nigeria.",
  },
  {
    question: "Why do you use volumetric weight?",
    answer: "Airlines charge based on whichever is greater — actual weight or volumetric weight. This is an industry standard. Volumetric weight is calculated as Length × Width × Height (cm) ÷ 5000.",
  },
] as const;
