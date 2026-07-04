/*
 * FAQ Page — Afro-Modern Premium
 * Full FAQ with accordion-style answers
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import SEOHead from "@/components/SEOHead";
import { FAQSchema } from "@/components/StructuredData";
import { FAQ_DATA, BUSINESS } from "@/lib/constants";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="FAQ — UK to Nigeria Shipping Questions Answered"
        description="Frequently asked questions about shipping from UK to Nigeria. Learn about delivery times, pricing, customs clearance, prohibited items, tracking, and insurance with J3 Cargo."
        path="/faq"
        keywords="UK Nigeria shipping FAQ, how long to ship to Nigeria, shipping costs Nigeria, customs clearance questions, prohibited items Nigeria"
      />
      <FAQSchema />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-dark text-white py-16 lg:py-20">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-sky font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Answers to the most common questions about shipping with J3 Cargo. Can't find what you need? Get in touch.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-3">
              {FAQ_DATA.map((faq, i) => (
                <SectionReveal key={i} delay={i * 50}>
                  <div className="bg-slate-cool rounded-xl border border-border overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-cool-dark/50 transition-colors"
                    >
                      <span className="font-heading font-semibold text-foreground pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-sky shrink-0 transition-transform duration-200 ${
                          openIndex === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openIndex === i && (
                      <div className="px-5 pb-5 text-muted-foreground leading-relaxed border-t border-border pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </SectionReveal>
              ))}
            </div>

            {/* Still have questions */}
            <SectionReveal delay={200}>
              <div className="mt-12 bg-navy rounded-2xl p-8 text-center text-white">
                <h3 className="font-heading text-2xl font-bold mb-3">Still Have Questions?</h3>
                <p className="text-white/70 mb-6">
                  Our team is happy to help. Reach out via WhatsApp for the fastest response.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-sky hover:bg-sky-dark text-navy-dark font-semibold">
                      <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
                    </Button>
                  </a>
                  <Link href="/contact">
                    <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                      Contact Page
                    </Button>
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
