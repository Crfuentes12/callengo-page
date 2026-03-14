//callengo-page/app/sitemap.ts
import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/data";

const BASE_URL = "https://callengo.com";

const integrationSlugs = [
  "google-calendar",
  "outlook-calendar",
  "simplybook-me",
  "google-meet",
  "zoom",
  "microsoft-teams",
  "hubspot",
  "salesforce",
  "pipedrive",
  "zoho-crm",
  "microsoft-dynamics-365",
  "slack",
  "google-sheets",
  "clio",
  "stripe",
  "webhooks",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/integrations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const agentPages: MetadataRoute.Sitemap = [
    "data-validation",
    "appointment-confirmation",
    "lead-qualification",
  ].map((slug) => ({
    url: `${BASE_URL}/agents/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const integrationPages: MetadataRoute.Sitemap = integrationSlugs.map(
    (slug) => ({
      url: `${BASE_URL}/integrations/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  const resourcePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/docs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/help`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/help/quick-start`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/free-tools`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: post.featured ? 0.85 : 0.75,
  }));

  const companyPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/legal`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/compliance`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [
    ...corePages,
    ...agentPages,
    ...integrationPages,
    ...resourcePages,
    ...blogPostPages,
    ...companyPages,
    ...legalPages,
  ];
}