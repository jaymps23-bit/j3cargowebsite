/*
 * Footer — Afro-Modern Premium
 * Dark forest green background, gold accents, warm typography
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { BUSINESS, IMAGES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white/90">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src={IMAGES.logo}
                alt="J3 Cargo"
                className="h-16 w-auto object-contain rounded-lg"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mt-4">
              Your trusted partner for shipping from the UK to Nigeria. Air freight, sea freight, packaging, and customs clearance — all handled with care.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Shipping Rates", href: "/rates" },
                { label: "Track Shipment", href: "/track" },
                { label: "FAQ", href: "/faq" },
                { label: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Air Freight", href: "/services#air-freight" },
                { label: "Sea Freight", href: "/services#sea-freight" },
                { label: "Packaging", href: "/services#packaging" },
                { label: "Customs Clearance", href: "/services#customs-clearance" },
                { label: "Request a Quote", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${BUSINESS.phone}`} className="flex items-start gap-3 text-white/60 hover:text-gold transition-colors text-sm">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-3 text-white/60 hover:text-gold transition-colors text-sm">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                  {BUSINESS.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                  {BUSINESS.address}
                </div>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <p className="text-xs text-white/40 uppercase tracking-wider mb-2">WhatsApp Us</p>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors font-medium"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} J3 Cargo Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <span>UK to Nigeria Shipping Specialists</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
