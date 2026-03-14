"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "./data";
import { trackNewsletterSubscribe } from "@/app/lib/analytics";

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeError, setSubscribeError] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();
    if (!trimmedEmail) return;

    setIsSubmitting(true);
    setSubscribeError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.error ?? "Something went wrong. Please try again."
        );
      }

      trackNewsletterSubscribe("blog");

      setSubscribed(true);
      setEmail("");
    } catch (err) {
      setSubscribeError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  className="block rounded-3xl overflow-hidden border border-border hover:border-border-dark hover:shadow-xl transition-all group"
                >
                  {/* Feature image */}
                  <div className="relative w-full aspect-[21/9] bg-background-secondary">
                    <Image
                      src={featuredPost.featureImage}
                      alt={featuredPost.featureImageAlt}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      sizes="(max-width: 1280px) 100vw, 1280px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-indigo/80 via-deep-indigo/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white mb-4">
                        {featuredPost.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-white/90 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-white/70 mb-4 max-w-2xl text-sm md:text-base">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </div>
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all">
                          Read article
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block h-full bg-white rounded-2xl border border-border overflow-hidden hover:border-border-dark hover:shadow-lg transition-all group"
                  >
                    {/* Feature image */}
                    <div className="relative w-full aspect-[16/9] bg-background-secondary">
                      <Image
                        src={post.featureImage}
                        alt={post.featureImageAlt}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-background-tertiary rounded-full text-sm text-foreground-secondary mb-4">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-electric transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-foreground-secondary text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-foreground-tertiary">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <span className="text-sm font-medium text-electric opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1">
                          Read
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Newsletter CTA — Synced with Footer / HubSpot via GTM */}
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
                <div className="absolute top-[-15%] left-[50%] w-1/3 h-[90%] bg-gradient-to-br from-[#6070E0]/30 via-white/20 to-[#8B96C8]/25 rounded-full blur-2xl animate-[ctaLava4_48s_ease-in-out_infinite]" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#3347D4]/40 via-[#3347D4]/15 to-transparent" />
              <div className="relative z-10 max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                  Stay updated
                </h3>
                <p className="text-xl text-white/70 mb-8 max-w-xl">
                  Get the latest insights on AI phone automation, no-show
                  reduction, and sales efficiency delivered to your inbox.
                </p>

                {subscribed ? (
                  <div className="flex items-center gap-2 text-accent bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 max-w-md">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm font-medium text-white">
                      You&apos;re subscribed! Check your inbox.
                    </span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-3 max-w-md"
                  >
                    <div className="flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setSubscribeError("");
                        }}
                        placeholder="Enter your email"
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent disabled:opacity-50"
                      />
                      {subscribeError && (
                        <p className="text-xs text-red-300 mt-1.5 ml-1">
                          {subscribeError}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-white text-deep-indigo text-sm font-semibold rounded-xl hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-1.5"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-deep-indigo/30 border-t-deep-indigo rounded-full animate-spin" />
                          Subscribing...
                        </>
                      ) : (
                        "Subscribe"
                      )}
                    </button>
                  </form>
                )}
              </div>
              <style jsx>{`
                @keyframes ctaLava1 {
                  0%,
                  100% {
                    transform: translate(0, 0) scale(1);
                  }
                  33% {
                    transform: translate(-30px, 25px) scale(1.06);
                  }
                  66% {
                    transform: translate(20px, -20px) scale(0.95);
                  }
                }
                @keyframes ctaLava2 {
                  0%,
                  100% {
                    transform: translate(0, 0) scale(1);
                  }
                  40% {
                    transform: translate(30px, -25px) scale(1.08);
                  }
                  70% {
                    transform: translate(-20px, 30px) scale(0.94);
                  }
                }
                @keyframes ctaLava3 {
                  0%,
                  100% {
                    transform: translate(0, 0) scale(1);
                  }
                  50% {
                    transform: translate(25px, -15px) scale(1.05);
                  }
                }
                @keyframes ctaLava4 {
                  0%,
                  100% {
                    transform: translate(0, 0) scale(1);
                  }
                  35% {
                    transform: translate(-20px, 30px) scale(1.06);
                  }
                  65% {
                    transform: translate(30px, -15px) scale(0.95);
                  }
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
