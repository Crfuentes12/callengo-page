"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "How to Reduce No-Shows by 60% with Automated Confirmations",
    excerpt: "Learn proven strategies for appointment confirmation that actually work. Discover how businesses are recovering thousands in lost revenue.",
    category: "Best Practices",
    date: "January 28, 2026",
    slug: "reduce-no-shows-automated-confirmations",
    featured: true,
  },
  {
    title: "The True Cost of Bad Data in Your CRM",
    excerpt: "Outdated contact information costs businesses more than you think. Here's how to calculate your data quality ROI.",
    category: "Data Quality",
    date: "January 25, 2026",
    slug: "true-cost-bad-data-crm",
  },
  {
    title: "5 Signs Your Lead Response Time is Killing Sales",
    excerpt: "Speed matters in sales. Research shows leads contacted within 5 minutes are 9x more likely to convert.",
    category: "Lead Management",
    date: "January 22, 2026",
    slug: "lead-response-time-killing-sales",
  },
  {
    title: "Appointment Confirmation Scripts That Get Results",
    excerpt: "The exact scripts and timing strategies that top-performing businesses use to confirm appointments.",
    category: "Best Practices",
    date: "January 18, 2026",
    slug: "appointment-confirmation-scripts",
  },
  {
    title: "Data Validation: Manual vs Automated Approaches",
    excerpt: "Compare the costs and benefits of different data validation methods for your business.",
    category: "Data Quality",
    date: "January 15, 2026",
    slug: "data-validation-manual-vs-automated",
  },
  {
    title: "How Healthcare Clinics Are Solving the No-Show Problem",
    excerpt: "Case study: A medical practice reduced no-shows from 23% to 8% in just three months.",
    category: "Case Studies",
    date: "January 12, 2026",
    slug: "healthcare-clinics-no-show-problem",
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="section">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="text-display-sm mb-6">Blog</h1>
              <p className="text-xl text-foreground-secondary">
                Insights, strategies, and best practices for reducing no-shows,
                improving data quality, and accelerating lead response.
              </p>
            </motion.div>

            {/* Featured Post */}
            {featuredPost && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-12"
              >
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="block gradient-bg rounded-3xl p-8 md:p-12 text-white hover:opacity-90 transition-opacity group"
                >
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/70 mb-6 max-w-2xl">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                      Read article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block h-full bg-white rounded-2xl border border-border p-6 hover:border-border-dark hover:shadow-lg transition-all group"
                  >
                    <span className="inline-block px-3 py-1 bg-background-tertiary rounded-full text-sm text-foreground-secondary mb-4">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-foreground-secondary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-foreground-secondary text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-foreground-tertiary">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Newsletter CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 gradient-bg rounded-3xl p-12 md:p-20 relative overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden opacity-90">
                <div className="absolute -top-1/4 right-[-10%] w-3/5 h-[120%] bg-gradient-to-br from-white/40 via-[#8B96C8]/35 to-[#6070E0]/25 rounded-full blur-2xl animate-[ctaLava1_35s_ease-in-out_infinite]" />
                <div className="absolute -bottom-1/3 left-[-10%] w-1/2 h-full bg-gradient-to-br from-[#8B96C8]/40 via-white/25 to-[#4F5FE8]/25 rounded-full blur-2xl animate-[ctaLava2_42s_ease-in-out_infinite]" />
                <div className="absolute top-[10%] left-[30%] w-2/5 h-4/5 bg-gradient-to-br from-white/30 via-[#1DB87A]/18 to-[#8B96C8]/20 rounded-full blur-2xl animate-[ctaLava3_38s_ease-in-out_infinite]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E2D6B]/40 via-[#1E2D6B]/15 to-transparent" />
              <div className="relative z-10 max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Stay updated</h3>
                <p className="text-xl text-white/70 mb-8 max-w-xl">
                  Get the latest insights on reducing no-shows and improving business efficiency delivered to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-primary text-sm font-semibold rounded-xl hover:bg-white/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              <style jsx>{`
                @keyframes ctaLava1 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  33% { transform: translate(-30px, 25px) scale(1.06); }
                  66% { transform: translate(20px, -20px) scale(0.95); }
                }
                @keyframes ctaLava2 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  40% { transform: translate(30px, -25px) scale(1.08); }
                  70% { transform: translate(-20px, 30px) scale(0.94); }
                }
                @keyframes ctaLava3 {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  50% { transform: translate(25px, -15px) scale(1.05); }
                }
              `}</style>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
