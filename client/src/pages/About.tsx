/*
 * About Page — Afro-Modern Premium
 * Company story, values, team image, stats
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import SEOHead from "@/components/SEOHead";
import { IMAGES, BUSINESS } from "@/lib/constants";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Heart, Zap, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="About J3 Cargo — UK to Nigeria Shipping Experts"
        description="Learn about J3 Cargo Services, a trusted UK-based cargo company specialising in air freight and sea freight shipping from London to Nigeria. Based in Bow, East London."
        path="/about"
        keywords="J3 Cargo about, UK Nigeria shipping company, cargo company London, Bow London shipping"
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-dark text-white py-16 lg:py-20">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-sky font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
              The People Behind Your Parcels
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              J3 Cargo Services was built to solve a real problem: making it simple, affordable, and reliable to ship goods from the UK to Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SectionReveal>
              <img
                src={IMAGES.aboutTeam}
                alt="J3 Cargo team at work"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
            </SectionReveal>
            <SectionReveal delay={150}>
              <div>
                <p className="text-sky font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                  Born from Experience, Built on Trust
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We started J3 Cargo because we understood the frustration of shipping to Nigeria firsthand. Lost parcels, unclear pricing, poor communication — we experienced it all and decided to build something better.
                  </p>
                  <p>
                    Based in Bow, East London, our warehouse and team handle every shipment with the care it deserves. We specialise in the UK-to-Nigeria corridor, which means we know the routes, the customs process, and the challenges inside out.
                  </p>
                  <p>
                    Today, we serve thousands of individuals and businesses who trust us to get their goods home safely. Whether it's a care package for family or a container of commercial goods, we treat every shipment like it's our own.
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-slate-cool pattern-overlay">
        <div className="container relative z-10">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-sky font-semibold text-sm uppercase tracking-wider mb-3">Our Values</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                What Drives Us Every Day
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Target className="w-6 h-6" />, title: "Reliability", desc: "We deliver on our promises. Your shipment arrives when we say it will." },
              { icon: <Heart className="w-6 h-6" />, title: "Care", desc: "Every parcel is handled as if it were our own. We understand what's inside matters." },
              { icon: <Zap className="w-6 h-6" />, title: "Efficiency", desc: "Streamlined processes mean faster shipping and fewer headaches for you." },
              { icon: <Globe className="w-6 h-6" />, title: "Expertise", desc: "Deep knowledge of UK-Nigeria shipping routes, customs, and regulations." },
            ].map((value, i) => (
              <SectionReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 border border-border h-full">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy text-white">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "5–7", label: "Days to Lagos" },
              { number: "37", label: "Nigerian States Covered" },
              { number: "24/7", label: "WhatsApp Support" },
              { number: "Free", label: "London Collection" },
            ].map((stat, i) => (
              <SectionReveal key={i} delay={i * 80}>
                <div>
                  <p className="font-heading text-3xl md:text-4xl font-extrabold text-sky mb-1">{stat.number}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Ready to Work with Us?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Get a free quote or speak to our team about your shipping needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-sky hover:bg-sky-dark text-navy-dark font-bold px-8">
                  Get a Quote <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white font-semibold px-8">
                  View Services
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
