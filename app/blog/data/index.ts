import { meta as reduceNoShowsMeta } from "./reduce-no-shows";
import { meta as trueCostBadDataMeta } from "./true-cost-bad-data-crm";
import { meta as leadResponseTimeMeta } from "./lead-response-time-killing-sales";

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

export const blogPosts: BlogMeta[] = [
  reduceNoShowsMeta,
  trueCostBadDataMeta,
  leadResponseTimeMeta,
];

export const blogPostsBySlug: Record<string, BlogMeta> = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post])
);
