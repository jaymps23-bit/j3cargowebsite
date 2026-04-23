/*
 * BlogArticle — Individual blog post page
 * Navy/Sky palette, full article content with sidebar
 */
import { useParams, Link, useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { getPostBySlug, getRelatedPosts } from "@/lib/blogData";
import { ArrowLeft, ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";
import { useEffect } from "react";

function MarkdownContent({ content }: { content: string }) {
  // Simple markdown-to-JSX renderer for blog content
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // H2
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-heading text-2xl md:text-3xl font-bold text-navy mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="font-heading text-xl font-bold text-navy-light mt-8 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
      i++;
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Bold paragraph handling
    const renderInline = (text: string) => {
      const parts = text.split(/(\*\*[^*]+\*\*)/g);
      return parts.map((part, idx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={idx} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
        }
        return <span key={idx}>{part}</span>;
      });
    };

    // Regular paragraph
    elements.push(
      <p key={i} className="text-foreground/80 leading-relaxed mb-4">
        {renderInline(line)}
      </p>
    );
    i++;
  }

  return <>{elements}</>;
}

export default function BlogArticle() {
  const params = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const post = getPostBySlug(params.slug || "");
  const relatedPosts = post ? getRelatedPosts(post.slug, 3) : [];

  useEffect(() => {
    if (!post) {
      setLocation("/blog");
    }
  }, [post, setLocation]);

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-dark text-white py-12 lg:py-16">
        <div className="container">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white/70 truncate max-w-[200px]">{post.title}</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-navy-dark bg-sky px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-white/60 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
              <span className="text-sm text-white/60 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              {post.title}
            </h1>
            <p className="text-white/60 text-lg mt-4 max-w-3xl leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-8">
              <SectionReveal>
                {/* Featured Image */}
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Article Body */}
                <div className="prose-custom">
                  <MarkdownContent content={post.content} />
                </div>

                {/* CTA Box */}
                <div className="mt-12 bg-navy-dark rounded-2xl p-8 text-white">
                  <h3 className="font-heading text-xl font-bold mb-2">Ready to Ship?</h3>
                  <p className="text-white/70 mb-6">
                    Get a free, no-obligation quote for your UK-to-Nigeria shipment. We respond within 24 hours.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact">
                      <Button className="bg-sky hover:bg-sky-dark text-navy-dark font-semibold">
                        Request a Quote
                      </Button>
                    </Link>
                    <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                        Chat on WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Back to Blog */}
                <div className="mt-8">
                  <Link href="/blog" className="inline-flex items-center gap-2 text-navy font-medium hover:text-sky transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to all articles
                  </Link>
                </div>
              </SectionReveal>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">
                {/* Quick Contact */}
                <SectionReveal delay={100}>
                  <div className="bg-slate-cool rounded-2xl p-6">
                    <h3 className="font-heading font-bold text-lg text-navy mb-3">Need Help Shipping?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our team is available Monday to Saturday to answer your questions and provide quotes.
                    </p>
                    <div className="space-y-2">
                      <a
                        href={BUSINESS.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-navy font-medium hover:text-sky transition-colors"
                      >
                        WhatsApp us →
                      </a>
                      <a
                        href={`tel:${BUSINESS.phone}`}
                        className="flex items-center gap-2 text-sm text-navy font-medium hover:text-sky transition-colors"
                      >
                        Call {BUSINESS.phone}
                      </a>
                      <a
                        href={`mailto:${BUSINESS.email}`}
                        className="flex items-center gap-2 text-sm text-navy font-medium hover:text-sky transition-colors"
                      >
                        Email {BUSINESS.email}
                      </a>
                    </div>
                  </div>
                </SectionReveal>

                {/* Related Articles */}
                <SectionReveal delay={200}>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((related) => (
                        <Link
                          key={related.slug}
                          href={`/blog/${related.slug}`}
                          className="group block"
                        >
                          <div className="flex gap-3">
                            <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0">
                              <img
                                src={related.image}
                                alt={related.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-sm font-medium text-foreground group-hover:text-navy transition-colors line-clamp-2 leading-snug">
                                {related.title}
                              </h4>
                              <span className="text-xs text-muted-foreground mt-1 block">{related.readTime}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </SectionReveal>

                {/* Quick Links */}
                <SectionReveal delay={300}>
                  <div className="bg-navy-dark rounded-2xl p-6 text-white">
                    <h3 className="font-heading font-bold text-lg mb-3">Quick Links</h3>
                    <div className="space-y-2">
                      <Link href="/rates" className="flex items-center gap-2 text-sm text-white/70 hover:text-sky transition-colors">
                        <ArrowRight className="w-3.5 h-3.5" /> View Shipping Rates
                      </Link>
                      <Link href="/track" className="flex items-center gap-2 text-sm text-white/70 hover:text-sky transition-colors">
                        <ArrowRight className="w-3.5 h-3.5" /> Track Your Shipment
                      </Link>
                      <Link href="/services" className="flex items-center gap-2 text-sm text-white/70 hover:text-sky transition-colors">
                        <ArrowRight className="w-3.5 h-3.5" /> Our Services
                      </Link>
                      <Link href="/faq" className="flex items-center gap-2 text-sm text-white/70 hover:text-sky transition-colors">
                        <ArrowRight className="w-3.5 h-3.5" /> Frequently Asked Questions
                      </Link>
                    </div>
                  </div>
                </SectionReveal>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
