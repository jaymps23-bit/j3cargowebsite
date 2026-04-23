/*
 * Blog Page — Afro-Modern Premium
 * Blog listing with sample articles
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { Link } from "wouter";
import { ArrowRight, Calendar } from "lucide-react";

const BLOG_POSTS = [
  {
    slug: "air-freight-rates-nigeria",
    title: "Understanding Air Freight Rates to Nigeria: What Affects the Price?",
    excerpt: "Shipping costs depend on more than just weight. Learn how volumetric weight, destination state, and service type affect your final quote.",
    date: "March 15, 2025",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
  },
  {
    slug: "packaging-tips-shipping",
    title: "How to Package Your Items for Safe Shipping to Nigeria",
    excerpt: "Proper packaging prevents damage and saves money. Here are our top tips for preparing your goods before dropping them off.",
    date: "February 28, 2025",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
  },
  {
    slug: "customs-clearance-guide",
    title: "Nigeria Customs Clearance: What You Need to Know",
    excerpt: "Importing goods into Nigeria involves customs duty and documentation. We break down the process so you know what to expect.",
    date: "February 10, 2025",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    slug: "sea-freight-vs-air-freight",
    title: "Sea Freight vs Air Freight: Which Is Right for You?",
    excerpt: "Speed or savings? Compare the two main shipping methods and find out which one suits your cargo and budget.",
    date: "January 22, 2025",
    category: "Comparison",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&q=80",
  },
  {
    slug: "shipping-electronics-nigeria",
    title: "Shipping Electronics to Nigeria: Rules, Rates, and Tips",
    excerpt: "TVs, laptops, and appliances are some of the most commonly shipped items. Here's everything you need to know about sending electronics.",
    date: "January 5, 2025",
    category: "Tips",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
  },
  {
    slug: "j3-cargo-services-overview",
    title: "Why J3 Cargo Is the Smart Choice for UK-to-Nigeria Shipping",
    excerpt: "From free London collection to customs clearance in Nigeria — discover what makes J3 Cargo different from other freight companies.",
    date: "December 18, 2024",
    category: "Company",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-forest-dark text-white py-16 lg:py-20">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">Blog</p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
              Shipping Insights & Guides
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Practical advice, industry updates, and tips to make your UK-to-Nigeria shipping experience smoother.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, i) => (
              <SectionReveal key={post.slug} delay={i * 80}>
                <article className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:shadow-forest/5 transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-gold bg-gold/10 px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-forest transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <span className="text-forest text-sm font-medium flex items-center gap-1 group-hover:text-gold transition-colors">
                        Read article <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={200}>
            <p className="text-center text-muted-foreground text-sm mt-12">
              More articles coming soon. Follow us on{" "}
              <a href="https://www.instagram.com/j3cargo/" target="_blank" rel="noopener noreferrer" className="text-forest font-medium hover:underline">
                Instagram
              </a>{" "}
              for the latest updates.
            </p>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
