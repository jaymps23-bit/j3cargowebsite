/*
 * Blog Page — Navy/Sky palette
 * Blog listing with real SEO-optimized articles
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogData";

export default function Blog() {
  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-navy-dark text-white py-16 lg:py-20">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-sky font-semibold text-sm uppercase tracking-wider mb-3">Blog</p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
              Shipping Insights & Guides
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Practical advice, industry updates, and tips to make your UK-to-Nigeria shipping experience smoother.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <SectionReveal>
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-navy-dark bg-sky/20 px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="text-xs font-medium text-sky bg-sky/10 px-2.5 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-navy transition-colors leading-snug">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}
                    </span>
                  </div>
                  <span className="text-navy font-semibold flex items-center gap-1.5 group-hover:text-sky transition-colors">
                    Read full article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-12 lg:py-16 bg-slate-cool">
        <div className="container">
          <SectionReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              All Articles
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, i) => (
              <SectionReveal key={post.slug} delay={i * 80}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:shadow-navy/5 transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-medium text-sky bg-sky/10 px-2.5 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-navy transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {post.date}
                        </span>
                        <span className="text-navy text-sm font-medium flex items-center gap-1 group-hover:text-sky transition-colors">
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={200}>
            <p className="text-center text-muted-foreground text-sm mt-12">
              Follow us on{" "}
              <a href="https://www.instagram.com/j3cargo/" target="_blank" rel="noopener noreferrer" className="text-navy font-medium hover:underline">
                Instagram
              </a>{" "}
              for the latest shipping tips and updates.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-dark text-white">
        <div className="container text-center">
          <SectionReveal>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Have a Question About Shipping?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8">
              Our team is ready to help. Whether you need a quote, advice on packaging, or information about customs clearance, we are here for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="bg-sky hover:bg-sky-dark text-navy-dark font-semibold px-6 py-3 rounded-lg transition-colors">
                  Get a Free Quote
                </button>
              </Link>
              <Link href="/faq">
                <button className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg transition-colors">
                  View FAQ
                </button>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
