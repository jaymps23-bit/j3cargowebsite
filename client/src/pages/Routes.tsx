/**
 * International Routes Page — Afro-Modern Premium
 * Showcases all shipping corridors: Nigeria-UK, China-Nigeria, USA-Nigeria, etc.
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Globe, Plane, Ship, Clock, DollarSign, Check } from "lucide-react";

const ROUTES = [
  {
    id: "uk-nigeria",
    title: "UK → Nigeria",
    description: "Our flagship route. Fast, reliable, and cost-effective.",
    airFreight: {
      timeline: "7–10 days to Lagos",
      pricing: "From £65 (up to 8kg)",
      features: ["Real-time tracking", "Free London collection", "Door-to-door delivery"],
    },
    seaFreight: {
      timeline: "4–6 weeks",
      pricing: "From £300 (LCL)",
      features: ["Full & shared containers", "Customs handled", "Competitive rates"],
    },
    icon: "🇬🇧→🇳🇬",
  },
  {
    id: "nigeria-uk",
    title: "Nigeria → UK",
    description: "Export goods from Nigeria to the United Kingdom with ease.",
    airFreight: {
      timeline: "7–10 working days",
      pricing: "From £5.70/kg",
      features: ["Express service", "Lagos to London", "Full tracking"],
    },
    seaFreight: {
      timeline: "6–8 weeks",
      pricing: "From £300 (LCL)",
      features: ["Cost-effective", "Large volumes", "Customs clearance"],
    },
    icon: "🇳🇬→🇬🇧",
  },
  {
    id: "china-nigeria-air",
    title: "China → Nigeria (Air)",
    description: "Fast air freight from China directly to Nigeria.",
    airFreight: {
      timeline: "10–14 days",
      pricing: "From $13/kg",
      features: ["Guangzhou to Lagos", "Bulk discounts", "Real-time tracking"],
    },
    seaFreight: null,
    icon: "🇨🇳→🇳🇬",
  },
  {
    id: "china-nigeria-sea",
    title: "China → Nigeria (Sea)",
    description: "Cost-effective sea freight for large shipments from China.",
    airFreight: null,
    seaFreight: {
      timeline: "25–35 days",
      pricing: "From $140/CBM (LCL)",
      features: ["Full containers", "Shared container options", "Customs handled"],
    },
    icon: "🇨🇳→🇳🇬",
  },
  {
    id: "usa-nigeria",
    title: "USA → Nigeria",
    description: "Reliable shipping from the United States to Nigeria.",
    airFreight: {
      timeline: "8–12 days",
      pricing: "From $14/kg",
      features: ["East & West Coast", "Door-to-door", "Tracking included"],
    },
    seaFreight: null,
    icon: "🇺🇸→🇳🇬",
  },
  {
    id: "nigeria-usa",
    title: "Nigeria → USA",
    description: "Export from Nigeria to the United States.",
    airFreight: {
      timeline: "7–10 days",
      pricing: "From £4.50/kg",
      features: ["Express service", "Customs handled", "Real-time tracking"],
    },
    seaFreight: null,
    icon: "🇳🇬→🇺🇸",
  },

  {
    id: "global-bespoke",
    title: "Global Bespoke Shipping",
    description: "Custom solutions for any origin to Nigeria or beyond. Includes Europe, Asia, and other regions.",
    airFreight: {
      timeline: "Varies by origin",
      pricing: "Custom quote",
      features: ["Any origin worldwide", "Hazardous materials", "Special handling"],
    },
    seaFreight: {
      timeline: "Varies by origin",
      pricing: "Custom quote",
      features: ["Project cargo", "Heavy lifts", "Consolidated shipments"],
    },
    icon: "🌍→🌎",
  }
];

export default function Routes() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-navy-dark to-navy py-16 lg:py-20 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sky text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Global Shipping Network
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
              International Shipping Routes
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              We don't just ship to Nigeria — we ship from everywhere to Nigeria and beyond. Explore our global network of routes, each optimized for speed, cost, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Routes Grid */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Shipping Corridors
              </h2>
              <p className="text-muted-foreground text-lg">
                Whether you're shipping from the UK, China, USA, or anywhere in the world, we have a route that works for you.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ROUTES.map((route, i) => (
              <SectionReveal key={route.id} delay={i * 100}>
                <div className="border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-sky/30 transition-all duration-300 bg-white">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-navy/5 to-sky/5 p-6 border-b border-border">
                    <div className="text-4xl mb-3">{route.icon}</div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{route.title}</h3>
                    <p className="text-muted-foreground text-sm">{route.description}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-6">
                    {/* Air Freight */}
                    {route.airFreight && (
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Plane className="w-5 h-5 text-sky" />
                          <h4 className="font-heading font-bold text-foreground">Air Freight</h4>
                        </div>
                        <div className="space-y-3 ml-7">
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Timeline</p>
                            <p className="text-foreground font-medium">{route.airFreight.timeline}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Pricing</p>
                            <p className="text-foreground font-medium">{route.airFreight.pricing}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">Includes</p>
                            <ul className="space-y-1">
                              {route.airFreight.features.map((feature, j) => (
                                <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                                  <Check className="w-3.5 h-3.5 text-sky shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Sea Freight */}
                    {route.seaFreight && (
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Ship className="w-5 h-5 text-sky" />
                          <h4 className="font-heading font-bold text-foreground">Sea Freight</h4>
                        </div>
                        <div className="space-y-3 ml-7">
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Timeline</p>
                            <p className="text-foreground font-medium">{route.seaFreight.timeline}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Pricing</p>
                            <p className="text-foreground font-medium">{route.seaFreight.pricing}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">Includes</p>
                            <ul className="space-y-1">
                              {route.seaFreight.features.map((feature, j) => (
                                <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                                  <Check className="w-3.5 h-3.5 text-sky shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="px-6 py-4 border-t border-border bg-slate-cool">
                    <Link href="/contact">
                      <Button className="w-full bg-sky hover:bg-sky-dark text-navy-dark font-semibold">
                        Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-24 bg-navy-dark text-white">
        <div className="container">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Why Choose J3 Cargo for Global Shipping?
              </h2>
              <p className="text-white/70 text-lg">
                Across all our routes, we maintain the same commitment to quality, reliability, and customer service.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Global Network", desc: "Partnerships across 50+ countries" },
              { icon: Clock, title: "Fast Delivery", desc: "Optimized routes for speed" },
              { icon: DollarSign, title: "Competitive Rates", desc: "Best prices in the market" },
              { icon: Check, title: "Customs Handled", desc: "Licensed agents everywhere" },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-sky/10 text-sky flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Don't See Your Route?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We offer bespoke shipping solutions for any origin and destination. Contact us for a custom quote.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-sky hover:bg-sky-dark text-navy-dark font-bold">
                  Request a Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
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
