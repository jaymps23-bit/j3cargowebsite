/*
 * QuoteForm — Reusable quote request form
 * Afro-Modern Premium: cream card, gold CTA, forest accents
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "",
    destination: "",
    weight: "",
    mode: "Air Freight",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `Hello J3 Cargo! I'd like a quote:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPickup: ${formData.pickup}\nDestination: ${formData.destination}\nWeight: ${formData.weight}kg\nMode: ${formData.mode}\nDescription: ${formData.description}`;
    const waUrl = `https://wa.me/447823718667?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
    toast.success("Opening WhatsApp with your quote details...");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        <div>
          <label className="block text-sm font-medium text-foreground/70 mb-1.5">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:ring-2 focus:ring-forest/20 focus:border-forest outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground/70 mb-1.5">Email Address</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:ring-2 focus:ring-forest/20 focus:border-forest outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground/70 mb-1.5">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+44 7XXX XXX XXX"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:ring-2 focus:ring-forest/20 focus:border-forest outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground/70 mb-1.5">Mode of Shipment</label>
          <select
            name="mode"
            value={formData.mode}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:ring-2 focus:ring-forest/20 focus:border-forest outline-none transition-all"
          >
            <option value="Air Freight">Air Freight</option>
            <option value="Sea Freight">Sea Freight</option>
            <option value="Bespoke Service (DHL)">Bespoke Service (DHL)</option>
            <option value="Custom Clearance">Custom Clearance Only</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground/70 mb-1.5">Pickup Location</label>
          <input
            type="text"
            name="pickup"
            value={formData.pickup}
            onChange={handleChange}
            placeholder="e.g. Tottenham, London"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:ring-2 focus:ring-forest/20 focus:border-forest outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground/70 mb-1.5">Destination in Nigeria</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="e.g. Ikeja, Lagos"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:ring-2 focus:ring-forest/20 focus:border-forest outline-none transition-all"
          />
        </div>
        {!compact && (
          <div>
            <label className="block text-sm font-medium text-foreground/70 mb-1.5">Weight (kg)</label>
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Estimated weight in kg"
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:ring-2 focus:ring-forest/20 focus:border-forest outline-none transition-all"
            />
          </div>
        )}
      </div>
      {!compact && (
        <div>
          <label className="block text-sm font-medium text-foreground/70 mb-1.5">Description of Contents</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            placeholder="Briefly describe what you are sending"
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:ring-2 focus:ring-forest/20 focus:border-forest outline-none transition-all resize-none"
          />
        </div>
      )}
      <Button
        type="submit"
        className="w-full bg-gold hover:bg-gold-dark text-forest-dark font-semibold py-3 text-sm"
        size="lg"
      >
        Send Quote Request via WhatsApp
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Or call us directly: <a href="tel:+447823718667" className="text-forest font-medium hover:underline">+44 78 2371 8667</a>
      </p>
    </form>
  );
}
