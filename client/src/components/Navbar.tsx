/*
 * Navbar — Afro-Modern Premium
 * Forest green + gold accents, Plus Jakarta Sans headings
 * Sticky with backdrop blur, mobile hamburger menu
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, NAV_LINKS, IMAGES } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-white text-sm hidden md:block">
        <div className="container flex justify-between items-center py-2">
          <div className="flex items-center gap-6">
            <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-1.5 hover:text-sky transition-colors">
              <Phone className="w-3.5 h-3.5" />
              {BUSINESS.phone}
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="hover:text-sky transition-colors">
              {BUSINESS.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-sky transition-colors">Instagram</a>
            <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-sky transition-colors">Facebook</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-white border-b border-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src={IMAGES.logo}
              alt="J3 Cargo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location === link.href
                    ? "text-navy bg-navy/5"
                    : "text-foreground/70 hover:text-navy hover:bg-navy/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/track">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white text-sm">
                Track Shipment
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-sky hover:bg-sky-dark text-navy-dark font-semibold text-sm">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-navy"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-border animate-in slide-in-from-top-2 duration-200">
            <nav className="container py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location === link.href
                      ? "text-navy bg-navy/5"
                      : "text-foreground/70 hover:text-navy hover:bg-navy/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2 border-t border-border mt-2">
                <Link href="/track" className="block">
                  <Button variant="outline" className="w-full border-navy text-navy">
                    Track Shipment
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button className="w-full bg-sky hover:bg-sky-dark text-navy-dark font-semibold">
                    Get a Quote
                  </Button>
                </Link>
                <a href={`tel:${BUSINESS.phone}`} className="flex items-center justify-center gap-2 py-2 text-sm text-navy">
                  <Phone className="w-4 h-4" />
                  {BUSINESS.phone}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
