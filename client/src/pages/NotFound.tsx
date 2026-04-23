/*
 * 404 Page — Afro-Modern Premium
 * Matches J3 Cargo brand: forest green, gold, cream
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center max-w-md px-4">
          <div className="w-20 h-20 rounded-2xl bg-navy/5 text-navy flex items-center justify-center mx-auto mb-6">
            <Package className="w-10 h-10" />
          </div>
          <h1 className="font-heading text-6xl font-extrabold text-navy mb-3">404</h1>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            This page seems to have gone missing — a bit like a parcel without a tracking number. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button className="bg-sky hover:bg-sky-dark text-navy-dark font-semibold">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
