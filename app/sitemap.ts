import type { MetadataRoute } from "next";

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

  // Core pages — high priority
  const corePages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
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

  // Comparison pages — high commercial intent
  const comparePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/compare`, priority: 0.85 },
    { url: `${BASE_URL}/compare/bland-ai`, priority: 0.85 },
    { url: `${BASE_URL}/compare/vapi`, priority: 0.85 },
    { url: `${BASE_URL}/compare/retell-ai`, priority: 0.85 },
    { url: `${BASE_URL}/compare/synthflow`, priority: 0.85 },
    { url: `${BASE_URL}/compare/dialpad`, priority: 0.85 },
  ].map((page) => ({
    ...page,
    lastModified: now,
    changeFrequency: "monthly" as const,
  }));

  // Product pages — agent detail pages
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

  // Integration detail pages
  const integrationPages: MetadataRoute.Sitemap = integrationSlugs.map(
    (slug) => ({
      url: `${BASE_URL}/integrations/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  // Resource pages
  const resourcePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/docs`, priority: 0.7 },
    { url: `${BASE_URL}/help`, priority: 0.7 },
    { url: `${BASE_URL}/help/quick-start`, priority: 0.7 },
    { url: `${BASE_URL}/blog`, priority: 0.7 },
    { url: `${BASE_URL}/free-tools`, priority: 0.6 },
  ].map((page) => ({
    ...page,
    lastModified: now,
    changeFrequency: "weekly" as const,
  }));

  // Company pages
  const companyPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/about`, priority: 0.6 },
    { url: `${BASE_URL}/contact`, priority: 0.6 },
  ].map((page) => ({
    ...page,
    lastModified: now,
    changeFrequency: "monthly" as const,
  }));

  // Legal pages — lower priority
  const legalPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/legal` },
    { url: `${BASE_URL}/privacy` },
    { url: `${BASE_URL}/terms` },
    { url: `${BASE_URL}/compliance` },
  ].map((page) => ({
    ...page,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [
    ...corePages,
    ...comparePages,
    ...agentPages,
    ...integrationPages,
    ...resourcePages,
    ...companyPages,
    ...legalPages,
  ];
}
