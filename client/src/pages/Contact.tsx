/*
 * Contact / Request Quote Page — Afro-Modern Premium
 * Quote form + contact details + map placeholder
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import SEOHead from "@/components/SEOHead";
import QuoteForm from "@/components/QuoteForm";
import { BUSINESS } from "@/lib/constants";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Contact J3 Cargo — Get a Shipping Quote"
        description="Contact J3 Cargo for a free shipping quote. Call +44 78 2371 8667, email info@j3cargo.com, or visit us at 429-431 Wick Lane, Bow, London. Free London collection available."
        path="/contact"
        keywords="J3 Cargo contact, shipping quote UK Nigeria, cargo company London phone number, Bow London shipping"
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-dark text-white py-16 lg:py-20">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-sky font-semibold text-sm uppercase tracking-wider mb-3">Contact</p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
              Get in Touch
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Request a quote, ask a question, or arrange a collection. We respond to all enquiries within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <SectionReveal>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Contact Details</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 text-navy flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground mb-1">Phone</p>
                      <a href={`tel:${BUSINESS.phone}`} className="text-muted-foreground text-sm hover:text-navy transition-colors">
                        {BUSINESS.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 text-navy flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground mb-1">WhatsApp</p>
                      <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-navy transition-colors">
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 text-navy flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground mb-1">Email</p>
                      <a href={`mailto:${BUSINESS.email}`} className="text-muted-foreground text-sm hover:text-navy transition-colors block">
                        {BUSINESS.email}
                      </a>
                      <a href={`mailto:${BUSINESS.altEmail}`} className="text-muted-foreground text-sm hover:text-navy transition-colors block">
                        {BUSINESS.altEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 text-navy flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground mb-1">Warehouse Address</p>
                      <p className="text-muted-foreground text-sm">{BUSINESS.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 text-navy flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm text-foreground mb-1">Working Hours</p>
                      <p className="text-muted-foreground text-sm">Mon – Fri: 9:00 AM – 6:00 PM</p>
                      <p className="text-muted-foreground text-sm">Sat: 10:00 AM – 3:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Quick action */}
                <div className="mt-8 p-5 bg-navy rounded-xl text-white">
                  <p className="font-heading font-semibold mb-2">Fastest Response?</p>
                  <p className="text-white/70 text-sm mb-4">WhatsApp us for the quickest reply, usually within minutes.</p>
                  <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-sky hover:bg-sky-dark text-navy-dark font-semibold">
                      <MessageCircle className="w-4 h-4 mr-2" /> Open WhatsApp
                    </Button>
                  </a>
                </div>
              </SectionReveal>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <SectionReveal delay={100}>
                <div className="bg-slate-cool rounded-2xl p-6 sm:p-8 border border-border">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Request a Quote</h2>
                  <p className="text-muted-foreground text-sm mb-6">
                    Fill in the details below and we'll get back to you with a competitive rate. All fields marked are required.
                  </p>
                  <QuoteForm />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
