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
              <p className="text-xl text-slate-600">
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-white/90 transition-colors">
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
                    className="block h-full bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-lg transition-all group"
                  >
                    <span className="inline-block px-3 py-1 bg-slate-100 rounded-full text-sm text-slate-600 mb-4">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-slate-700 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
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
              className="mt-16 gradient-bg rounded-3xl p-8 md:p-12 text-center text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Stay updated</h3>
              <p className="text-white/70 mb-6 max-w-md mx-auto">
                Get the latest insights on reducing no-shows and improving business efficiency delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full border border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-primary text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
