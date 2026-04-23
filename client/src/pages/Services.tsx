/*
 * Services Page — Afro-Modern Premium
 * Detailed service breakdowns with anchored sections
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { IMAGES, SERVICES, BUSINESS } from "@/lib/constants";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Plane, Ship, Package, FileCheck, ArrowRight, Check } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  "Plane": <Plane className="w-7 h-7" />,
  "Ship": <Ship className="w-7 h-7" />,
  "Package": <Package className="w-7 h-7" />,
  "FileCheck": <FileCheck className="w-7 h-7" />,
};

const SERVICE_IMAGES = [
  IMAGES.airFreight,
  IMAGES.seaFreight,
  "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
];

const SERVICE_DETAILS = [
  {
    extra: "Our air freight service is the fastest way to get your goods to Nigeria. Parcels are collected from your location in London (free of charge), professionally repackaged at our Bow warehouse, and shipped via air cargo. You'll receive a tracking number to monitor your shipment every step of the way. Transit time to Lagos is 7–10 working days, with deliveries to other states taking an additional 2–3 days. Rates start from £60 for shipments up to 8kg, then £6/kg plus £15 handling fee for heavier items.",
  },
  {
    extra: "Sea freight is the cost-effective choice for heavy, bulky, or large-volume shipments. We handle vehicles, appliances, furniture, and commercial goods. Choose between full container load (FCL) or shared container options depending on your cargo size. Our team manages all documentation and coordinates with our partners at Nigerian ports for smooth clearance.",
  },
  {
    extra: "Every item that passes through our warehouse is professionally repackaged before shipping. We use reinforced cardboard, bubble wrap, and protective padding to ensure your goods survive the journey. Fragile items like electronics and glassware receive extra attention. This service is included free when you ship from our warehouse.",
  },
  {
    extra: "Our licensed customs agents in Nigeria handle all import clearance on your behalf. Air freight shipments are typically cleared within 2 working days, while container shipments take approximately 5 working days. We also offer bespoke shipping solutions for hazardous materials. We manage all NAFDAC requirements, duty calculations, and documentation so you don't have to deal with the complexity.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-dark text-white py-16 lg:py-20">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-sky font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
              Shipping Solutions That Work
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Whether you're sending a care package or a container of goods, we have the right service for you. Every option includes tracking and dedicated support.
            </p>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {SERVICES.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 lg:py-24 ${i % 2 === 0 ? "bg-white" : "bg-slate-cool"}`}
        >
          <div className="container">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
              <SectionReveal>
                <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-navy/5 text-navy flex items-center justify-center mb-5">
                    {ICON_MAP[service.icon]}
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">{service.description}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{SERVICE_DETAILS[i].extra}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-foreground">
                        <Check className="w-4 h-4 text-sky shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="bg-sky hover:bg-sky-dark text-navy-dark font-semibold">
                      Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </SectionReveal>
              <SectionReveal delay={200}>
                <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                  <img
                    src={SERVICE_IMAGES[i]}
                    alt={service.title}
                    className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  />
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="container">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold mb-4">Not Sure Which Service You Need?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Tell us what you're shipping and we'll recommend the best option for your budget and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-sky hover:bg-sky-dark text-navy-dark font-bold px-8">
                  Chat on WhatsApp
                </Button>
              </a>
              <Link href="/rates">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8">
                  View Rates
                </Button>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
