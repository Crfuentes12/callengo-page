//callengo-page/app/blog/data/posts.ts
export interface BlogMeta {
  title: string;
  metaDescription: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  featured: boolean;
  excerpt: string;
  featureImage: string;
  featureImageAlt: string;
}

export const reduceNoShowsMeta: BlogMeta = {
  title:
    "How to Reduce Patient No-Shows: Proven Strategies for Healthcare Practices in 2026",
  metaDescription:
    "Patient no-shows cost practices $150K/year per provider. Learn 7 proven strategies to reduce no-shows in 2026, from automated reminders to AI phone agents.",
  category: "Best Practices",
  date: "January 28, 2026",
  readTime: "12 min read",
  slug: "reduce-no-shows-automated-confirmations",
  featured: true,
  excerpt:
    "Learn proven strategies for appointment confirmation that actually work. Discover how businesses are recovering thousands in lost revenue.",
  featureImage: "/blog/reduce-no-shows.jpeg",
  featureImageAlt:
    "Dashboard showing reduced no-show rates with AI appointment confirmation",
};

export const trueCostBadDataMeta: BlogMeta = {
  title:
    "The True Cost of Bad CRM Data (And How to Fix It Before It Wrecks Your Pipeline)",
  metaDescription:
    "Bad CRM data costs businesses $3.1T/year. Learn how data decay destroys your pipeline and 5 ways to validate and clean your CRM data in 2026.",
  category: "Data Quality",
  date: "January 25, 2026",
  readTime: "10 min read",
  slug: "true-cost-bad-data-crm",
  featured: false,
  excerpt:
    "Outdated contact information costs businesses more than you think. Here's how to calculate your data quality ROI.",
  featureImage: "/blog/true-cost-bad-data-crm.jpeg",
  featureImageAlt:
    "CRM data quality dashboard showing verified vs unverified contact records",
};

export const leadResponseTimeMeta: BlogMeta = {
  title:
    "AI SDR vs. Human SDR: How AI Lead Qualification Is Reshaping B2B Sales in 2026",
  metaDescription:
    "AI SDRs now automate 60-80% of lead qualification. Compare AI vs. human SDRs and learn how voice AI is changing B2B outbound sales in 2026.",
  category: "Lead Management",
  date: "January 22, 2026",
  readTime: "11 min read",
  slug: "lead-response-time-killing-sales",
  featured: false,
  excerpt:
    "Speed matters in sales. Research shows leads contacted within 5 minutes are 9x more likely to convert. Here is what AI SDRs change.",
  featureImage: "/blog/lead-response-time-killing-sales.jpeg",
  featureImageAlt:
    "AI lead qualification pipeline showing hot, warm, and cold lead scoring",
};

export const blogPosts: BlogMeta[] = [
  reduceNoShowsMeta,
  trueCostBadDataMeta,
  leadResponseTimeMeta,
];

export const blogPostsBySlug: Record<string, BlogMeta> = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post])
);