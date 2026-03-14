"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Integration {
  name: string;
  logo: string;
}

const allIntegrations: Record<string, Integration> = {
  hubspot: { name: "HubSpot", logo: "/integrations/hubspot.png" },
  salesforce: { name: "Salesforce", logo: "/integrations/salesforce.png" },
  pipedrive: { name: "Pipedrive", logo: "/integrations/pipedrive.png" },
  zoho: { name: "Zoho CRM", logo: "/integrations/zoho.png" },
  clio: { name: "Clio", logo: "/integrations/clio.png" },
  googleCalendar: { name: "Google Calendar", logo: "/integrations/calendar.png" },
  outlook: { name: "Outlook", logo: "/integrations/outlook.png" },
  zoom: { name: "Zoom", logo: "/integrations/zoom.png" },
  teams: { name: "Microsoft Teams", logo: "/integrations/teams.png" },
  slack: { name: "Slack", logo: "/integrations/slack.png" },
  sheets: { name: "Google Sheets", logo: "/integrations/sheets.png" },
  simplybook: { name: "SimplyBook.me", logo: "/integrations/simplybook.png" },
  dynamics: { name: "Dynamics 365", logo: "/integrations/dynamics.png" },
  meets: { name: "Google Meet", logo: "/integrations/meets.png" },
};

interface IntegrationCalloutProps {
  title: string;
  description: string;
  integrations: (keyof typeof allIntegrations)[];
  linkTo?: string;
  linkLabel?: string;
}

export default function IntegrationCallout({
  title,
  description,
  integrations,
  linkTo = "/integrations",
  linkLabel = "View all integrations",
}: IntegrationCalloutProps) {
  const items = integrations
    .map((key) => allIntegrations[key])
    .filter(Boolean);

  return (
    <div className="my-10 rounded-2xl border border-border bg-background-secondary/50 p-6 md:p-8">
      <p className="text-sm font-semibold text-electric uppercase tracking-wider mb-2">
        Integrations
      </p>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-foreground-secondary text-sm mb-6">{description}</p>

      <div className="flex flex-wrap gap-4 mb-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2.5 bg-white rounded-xl border border-border px-4 py-2.5 shadow-xs"
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={24}
              height={24}
              className="rounded"
            />
            <span className="text-sm font-medium text-foreground">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <Link
        href={linkTo}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric hover:text-electric/80 transition-colors"
      >
        {linkLabel}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
