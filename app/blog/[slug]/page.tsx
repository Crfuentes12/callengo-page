"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { blogPostsBySlug } from "../data";
import ReduceNoShowsContent from "../data/reduce-no-shows";
import TrueCostBadDataContent from "../data/true-cost-bad-data-crm";
import LeadResponseTimeContent from "../data/lead-response-time-killing-sales";
import type { ReactNode } from "react";

const blogContentComponents: Record<string, () => ReactNode> = {
  "reduce-no-shows-automated-confirmations": ReduceNoShowsContent,
  "true-cost-bad-data-crm": TrueCostBadDataContent,
  "lead-response-time-killing-sales": LeadResponseTimeContent,
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPostsBySlug[slug];
  const ContentComponent = blogContentComponents[slug];

  if (!post || !ContentComponent) {
    return (
      <>
        <Header />
        <main className="pt-24 pb-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-display-sm mb-6">Post Not Found</h1>
            <p className="text-foreground-secondary mb-8">
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/blog" className="btn-primary">
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="section pb-0">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-electric/10 text-electric rounded-full text-sm font-medium">
                  <Tag className="w-3.5 h-3.5" />
                  {post.category}
                </span>
                <div className="flex items-center gap-4 text-sm text-foreground-tertiary">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-6 text-foreground">
                {post.title}
              </h1>

              <p className="text-lg text-foreground-secondary leading-relaxed">
                {post.metaDescription}
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-6 mt-12">
          <div className="h-px bg-border mb-12" />
        </div>

        {/* Content */}
        <article className="max-w-3xl mx-auto px-6">
          <ContentComponent />

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all articles
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
