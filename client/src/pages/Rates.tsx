/*
 * Rates Page — Afro-Modern Premium
 * Shipping rates by state + fixed item pricing
 */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Info } from "lucide-react";

const STATE_RATES = [
  { state: "Lagos", delivery: 6.5, collection: 6.2, min: 65 },
  { state: "Oyo", delivery: 6.8, collection: 6.8, min: 80 },
  { state: "Ogun", delivery: 7, collection: 7, min: 80 },
  { state: "Ondo", delivery: 7, collection: 7, min: 80 },
  { state: "Osun", delivery: 7, collection: 7, min: 80 },
  { state: "Ekiti", delivery: 7, collection: 6.8, min: 80 },
  { state: "Kwara", delivery: 7, collection: 6.8, min: 85 },
  { state: "Abia", delivery: 7.5, collection: 7.2, min: 85 },
  { state: "Abuja (FCT)", delivery: 7.5, collection: 7.2, min: 85 },
  { state: "Akwa Ibom", delivery: 7.5, collection: 7.2, min: 85 },
  { state: "Anambra", delivery: 7.5, collection: 7.2, min: 85 },
  { state: "Bayelsa", delivery: 7.5, collection: 7.2, min: 85 },
  { state: "Benue", delivery: 7.5, collection: 7.2, min: 85 },
  { state: "Cross River", delivery: 7.5, collection: 7.2, min: 85 },
  { state: "Delta", delivery: 7.5, collection: 7.2, min: 85 },
  { state: "Ebonyi", delivery: 7.5, collection: 7.2, min: 85 },
  { state: "Edo", delivery: 7.5, collection: 7.2, min: 85 },
  { state: "Enugu", delivery: 7.5, collection: 7.2, min: 85 },
  { state: "Imo", delivery: 7.5, collection: 7.2, min: 85 },
  { state: "Rivers", delivery: 7.5, collection: 7.2, min: 85 },
  { state: "Yobe", delivery: 7.5, collection: 7, min: 90 },
  { state: "Bauchi", delivery: 8, collection: 7.5, min: 95 },
  { state: "Gombe", delivery: 8, collection: 7.5, min: 95 },
  { state: "Jigawa", delivery: 8, collection: 7.5, min: 95 },
  { state: "Kaduna", delivery: 8, collection: 7.5, min: 95 },
  { state: "Kano", delivery: 8, collection: 7.5, min: 95 },
  { state: "Katsina", delivery: 8, collection: 7.5, min: 95 },
  { state: "Kebbi", delivery: 8, collection: 7.5, min: 95 },
  { state: "Kogi", delivery: 8, collection: 7.5, min: 95 },
  { state: "Plateau", delivery: 8, collection: 7.5, min: 95 },
  { state: "Sokoto", delivery: 8, collection: 7.5, min: 95 },
  { state: "Taraba", delivery: 8, collection: 7.5, min: 95 },
  { state: "Zamfara", delivery: 8.5, collection: 8, min: 95 },
  { state: "Adamawa", delivery: 8.5, collection: 8, min: 95 },
  { state: "Borno", delivery: 8.5, collection: 8, min: 95 },
  { state: "Nasarawa", delivery: 8.5, collection: 8, min: 100 },
  { state: "Niger", delivery: 8.5, collection: 8, min: 100 },
];

const FIXED_ITEMS = [
  { item: "Laptops, Tablets, iPads", price: 50 },
  { item: "19\" TV", price: 120 },
  { item: "26\" TV", price: 150 },
  { item: "32\" TV", price: 170 },
  { item: "37\" TV", price: 190 },
  { item: "40\" TV", price: 290 },
  { item: "47\" TV", price: 410 },
  { item: "50\" TV", price: 500 },
  { item: "55\" TV", price: 570 },
  { item: "60–62\" TV", price: 620 },
  { item: "75\" TV", price: 720 },
  { item: "80\" TV", price: 750 },
  { item: "90\" TV", price: 850 },
  { item: "Desktop Computer", price: 150 },
  { item: "American Fridge", price: 800 },
  { item: "Washing Machine", price: 550 },
  { item: "Cooker", price: 250 },
];

export default function Rates() {
  const [search, setSearch] = useState("");

  const filteredRates = STATE_RATES.filter((r) =>
    r.state.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Shipping Rates — UK to Nigeria Pricing by State"
        description="Transparent shipping rates from UK to Nigeria. Per-kg pricing for all 36 Nigerian states. Air freight from £65. Fixed prices for TVs, laptops, appliances. Free London collection."
        path="/rates"
        keywords="UK to Nigeria shipping rates, cargo cost Lagos, shipping price per kg Nigeria, how much to ship to Nigeria, air freight cost Nigeria"
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-dark text-white py-16 lg:py-20">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-sky font-semibold text-sm uppercase tracking-wider mb-3">Pricing</p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
              Transparent Shipping Rates
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              No hidden fees. Our air freight rates are listed by Nigerian state so you know exactly what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* Rate info banner */}
      <section className="bg-sky/10 border-b border-sky/20">
        <div className="container py-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-sky shrink-0 mt-0.5" />
            <p className="text-sm text-foreground/80">
              Rates shown are for <strong>air freight</strong> per kilogram. A flat rate of <strong>£65</strong> applies for shipments up to 8kg. A <strong>£15 handling fee</strong> applies to all shipments above 8kg. Delivery to Lagos takes 7–10 working days; outside Lagos takes an additional 2–3 days. For sea freight or hazardous materials, please <Link href="/contact" className="text-navy font-medium underline">contact us</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* State Rates */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <SectionReveal>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h2 className="font-heading text-2xl font-bold text-foreground">Air Freight Rates by State</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search state..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 pr-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:ring-2 focus:ring-navy/20 focus:border-navy outline-none w-full sm:w-64"
                />
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-5 py-3.5 font-semibold">State</th>
                    <th className="text-right px-5 py-3.5 font-semibold">Delivery (£/kg)</th>
                    <th className="text-right px-5 py-3.5 font-semibold">Collection (£/kg)</th>
                    <th className="text-right px-5 py-3.5 font-semibold">Min Charge (£)</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRates.map((rate, i) => (
                    <tr
                      key={rate.state}
                      className={`border-t border-border ${i % 2 === 0 ? "bg-white" : "bg-slate-cool/50"} hover:bg-sky/5 transition-colors`}
                    >
                      <td className="px-5 py-3 font-medium text-foreground">{rate.state}</td>
                      <td className="px-5 py-3 text-right text-muted-foreground">£{rate.delivery.toFixed(2)}</td>
                      <td className="px-5 py-3 text-right text-muted-foreground">£{rate.collection.toFixed(2)}</td>
                      <td className="px-5 py-3 text-right font-medium text-navy">£{rate.min}</td>
                    </tr>
                  ))}
                  {filteredRates.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-5 py-8 text-center text-muted-foreground">
                        No states found matching "{search}". Try a different search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              * "Delivery" = delivered to address. "Collection" = receiver collects from our agent. Rates are per kilogram.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Fixed Item Rates */}
      <section className="py-16 lg:py-20 bg-slate-cool">
        <div className="container">
          <SectionReveal>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Fixed-Price Items (to Lagos)</h2>
            <p className="text-muted-foreground text-sm mb-8">
              These items have a flat shipping rate to Lagos regardless of weight. For delivery outside Lagos, additional charges apply.
            </p>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {FIXED_ITEMS.map((item) => (
                <div
                  key={item.item}
                  className="flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-border hover:border-sky/30 transition-colors"
                >
                  <span className="text-sm text-foreground">{item.item}</span>
                  <span className="font-heading font-bold text-navy text-lg">£{item.price}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="container">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-bold mb-4">Need a Custom Quote?</h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              For sea freight, bulk shipments, or items not listed above, get in touch for a personalised quote.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-sky hover:bg-sky-dark text-navy-dark font-bold px-8">
                Request a Quote <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
