/*
 * Homepage — Afro-Modern Premium
 * Forest green + gold + cream, Plus Jakarta Sans headings
 * Sections: Hero, Services, How It Works, Why Choose Us, FAQ Preview, Quote Form
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Plane, Ship, Package, FileCheck, ArrowRight, CheckCircle, Clock, Shield, Headphones, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import SectionReveal from "@/components/SectionReveal";
import { IMAGES, SERVICES, PROCESS_STEPS, FAQ_DATA, BUSINESS } from "@/lib/constants";
import { useState } from "react";
import { Star, Quote } from "lucide-react";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "Plane": <Plane className="w-6 h-6" />,
  "Ship": <Ship className="w-6 h-6" />,
  "Package": <Package className="w-6 h-6" />,
  "FileCheck": <FileCheck className="w-6 h-6" />,
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Cargo plane and ship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/75 to-navy-dark/50" />
        </div>

        <div className="container relative z-10 py-20 md:py-28 lg:py-36">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sky text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-sky rounded-full animate-pulse" />
              UK → Nigeria Shipping Specialists
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6">
              UK to Nigeria Shipping —{" "}
              <span className="text-sky">Fast, Reliable, Stress-Free</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Air freight in 7–10 working days to Lagos, plus 2–3 days outside Lagos. Flat rate £65 up to 8kg. Sea freight for heavy cargo. Free London collection. Customs cleared and delivered to any address in Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-sky hover:bg-sky-dark text-navy-dark font-bold text-base px-8 py-6">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/track">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold text-base px-8 py-6">
                  Track Your Shipment
                </Button>
              </Link>
            </div>
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-10 text-white/60 text-sm">
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sky" /> Free London Collection</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sky" /> Door-to-Door Delivery</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-sky" /> Real-Time Tracking</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SUMMARY ===== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-sky font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Everything You Need to Ship to Nigeria
              </h2>
              <p className="text-muted-foreground text-lg">
                From a single parcel to a full container — we handle the logistics so you don't have to.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <SectionReveal key={service.id} delay={i * 100}>
                <Link href={`/services#${service.id}`}>
                  <div className="group p-6 rounded-2xl border border-border bg-white hover:border-sky/30 hover:shadow-lg hover:shadow-sky/5 transition-all duration-300 h-full">
                    <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-4 group-hover:bg-sky/10 group-hover:text-sky transition-colors">
                      {SERVICE_ICONS[service.icon]}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{service.shortDesc}</p>
                    <span className="text-navy text-sm font-medium group-hover:text-sky transition-colors flex items-center gap-1">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 lg:py-24 bg-slate-cool pattern-overlay">
        <div className="container relative z-10">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-sky font-semibold text-sm uppercase tracking-wider mb-3">How It Works</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Four Simple Steps to Ship Your Cargo
              </h2>
              <p className="text-muted-foreground text-lg">
                We've simplified international shipping. Here's how your parcel gets from the UK to Nigeria.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <SectionReveal key={step.step} delay={i * 120}>
                <div className="relative">
                  {/* Connector line */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-[2px] bg-gradient-to-r from-sky/40 to-sky/10" />
                  )}
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-navy text-sky flex items-center justify-center mx-auto mb-5 text-2xl font-heading font-bold shadow-lg shadow-navy/20">
                      {step.step}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionReveal>
              <div>
                <p className="text-sky font-semibold text-sm uppercase tracking-wider mb-3">Why J3 Cargo</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Trusted by Thousands Shipping to Nigeria
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  We're not a faceless logistics company. We're a team that understands the UK-to-Nigeria corridor because we live it. Every parcel matters to us.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { icon: <Clock className="w-5 h-5" />, title: "Fast Delivery", desc: "7–10 working days air freight to Lagos, 2–3 days extra to other regions." },
                    { icon: <Shield className="w-5 h-5" />, title: "Safe & Secure", desc: "Professional packaging and real-time tracking on every shipment." },
                    { icon: <Headphones className="w-5 h-5" />, title: "Dedicated Support", desc: "Real people you can call, WhatsApp, or email. Mon-Fri 9AM-6PM, Sat 10AM-3PM." },
                    { icon: <CheckCircle className="w-5 h-5" />, title: "Customs Handled", desc: "Licensed agents in Nigeria clear your goods — hassle-free." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-10 h-10 rounded-lg bg-navy/5 text-navy flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-sm text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div className="relative">
                <img
                  src={IMAGES.aboutTeam}
                  alt="J3 Cargo team"
                  className="rounded-2xl shadow-2xl shadow-navy/10 w-full object-cover aspect-[4/3]"
                />
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white rounded-xl shadow-xl p-5 border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-sky/10 flex items-center justify-center">
                      <Plane className="w-6 h-6 text-sky" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-2xl text-navy">5–7</p>
                      <p className="text-muted-foreground text-xs">Days to Lagos</p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 lg:py-24 bg-navy">
        <div className="container">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-sky font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-white/60 text-lg">
                Thousands of individuals and businesses trust J3 Cargo to deliver their goods safely to Nigeria.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Magdalene Lawson-Amadi",
                location: "UK → Nigeria",
                text: "J3 is amazing - very professional. Transparent and customer service representatives have great communication skills. J3 delivers parcels within the agreed timescales and SLAs.",
                rating: 5,
              },
              {
                name: "Ademiluy Aderindola",
                location: "UK → Nigeria",
                text: "J3 cargo is reliable and affordable. Their customer service is amazing. Would use them again.",
                rating: 5,
              },
              {
                name: "Modupe Oube Onbogems",
                location: "UK → Nigeria",
                text: "I have used J3 services over 3 times to date and always happy with their services. Highly recommended.",
                rating: 5,
              },
              {
                name: "Aseez abiola",
                location: "UK → France",
                text: "Thank you for your prompt delivery to our client in France. It's nice interacting with you.",
                rating: 5,
              },
              {
                name: "Tuludope Adigun",
                location: "UK → Nigeria",
                text: "Great customer service. Items delivered in good time.",
                rating: 5,
              },
              {
                name: "YUSUFF AWOSANYA",
                location: "UK → Nigeria",
                text: "Very reliable. Positive: Professionalism",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <SectionReveal key={i} delay={i * 80}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-sky/30 mb-4" />
                  <p className="text-white/80 text-sm leading-relaxed flex-1 mb-5">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <div>
                      <p className="font-heading font-semibold text-white text-sm">{testimonial.name}</p>
                      <p className="text-white/40 text-xs">{testimonial.location}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          className={`w-3.5 h-3.5 ${
                            s < testimonial.rating ? "text-sky fill-sky" : "text-white/20"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ PREVIEW ===== */}
      <section className="py-20 lg:py-24 bg-slate-cool">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <SectionReveal>
              <div>
                <p className="text-sky font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Common Questions
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Quick answers to the questions we hear most. Need more detail? Visit our full FAQ page.
                </p>
                <Link href="/faq">
                  <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                    View All FAQs <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </SectionReveal>

            <SectionReveal delay={150}>
              <div className="space-y-3">
                {FAQ_DATA.slice(0, 5).map((faq, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl border border-border overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className="font-medium text-sm text-foreground pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ===== QUOTE FORM ===== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-10">
                <p className="text-sky font-semibold text-sm uppercase tracking-wider mb-3">Get Started</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Request a Free Quote
                </h2>
                <p className="text-muted-foreground text-lg">
                  Tell us what you're shipping and where. We'll get back to you with a competitive rate.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={100}>
              <div className="bg-slate-cool rounded-2xl p-6 sm:p-8 border border-border">
                <QuoteForm />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.lagos} alt="Lagos skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-navy-dark/85" />
        </div>
        <div className="container relative z-10 py-16 lg:py-20 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Ship to Nigeria?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Get your cargo moving today. Call us, WhatsApp us, or request a quote online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-sky hover:bg-sky-dark text-navy-dark font-bold px-8">
                  WhatsApp Us Now
                </Button>
              </a>
              <a href={`tel:${BUSINESS.phone}`}>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8">
                  Call {BUSINESS.phone}
                </Button>
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
