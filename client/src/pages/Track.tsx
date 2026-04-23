/*
 * Track Shipment Page — Afro-Modern Premium
 * Simple tracking interface with WhatsApp fallback
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";
import { Search, Package, MapPin, Clock, CheckCircle, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export default function Track() {
  const [trackingId, setTrackingId] = useState("");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) {
      toast.error("Please enter a tracking number");
      return;
    }
    // Open WhatsApp with tracking request
    const msg = `Hello J3 Cargo! I'd like to track my shipment.\n\nTracking Number: ${trackingId}`;
    window.open(`https://wa.me/447823718667?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success("Opening WhatsApp to check your tracking status...");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-dark text-white py-16 lg:py-20">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-sky font-semibold text-sm uppercase tracking-wider mb-3">Tracking</p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
              Track Your Shipment
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Enter your tracking number below to check the status of your shipment, or contact us directly for an update.
            </p>
          </div>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <div className="bg-slate-cool rounded-2xl p-8 border border-border">
                <form onSubmit={handleTrack} className="space-y-4">
                  <label className="block text-sm font-medium text-foreground/70 mb-1">Tracking Number</label>
                  <div className="flex gap-3">
                    <div className="relative flex-1">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        placeholder="Enter your tracking number"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-white text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none"
                      />
                    </div>
                    <Button type="submit" className="bg-navy hover:bg-navy-light text-white font-semibold px-6 py-3.5 shrink-0">
                      Track
                    </Button>
                  </div>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Don't have a tracking number? Contact us directly:</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white">
                        <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
                      </Button>
                    </a>
                    <a href={`tel:${BUSINESS.phone}`} className="flex-1">
                      <Button variant="outline" className="w-full border-border text-foreground hover:bg-slate-cool">
                        Call {BUSINESS.phone}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* How tracking works */}
      <section className="py-16 lg:py-20 bg-slate-cool pattern-overlay">
        <div className="container relative z-10">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Shipment Journey Stages
              </h2>
              <p className="text-muted-foreground">
                Here's what each stage of your shipment looks like from collection to delivery.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Package className="w-6 h-6" />, title: "Registered", desc: "Your parcel has been received and logged into our system." },
              { icon: <Clock className="w-6 h-6" />, title: "Processing", desc: "Being repackaged and prepared for shipment at our warehouse." },
              { icon: <MapPin className="w-6 h-6" />, title: "In Transit", desc: "On its way to Nigeria via air or sea freight." },
              { icon: <CheckCircle className="w-6 h-6" />, title: "Delivered", desc: "Cleared through customs and delivered to your address." },
            ].map((stage, i) => (
              <SectionReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 border border-border text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center mx-auto mb-4">
                    {stage.icon}
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{stage.title}</h3>
                  <p className="text-muted-foreground text-sm">{stage.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
