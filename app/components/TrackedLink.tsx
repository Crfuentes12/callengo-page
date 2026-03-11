"use client";

import { pushEvent } from "@/app/lib/analytics";

interface TrackedLinkProps {
  href: string;
  event: string;
  params?: Record<string, string>;
  className?: string;
  children: React.ReactNode;
}

export function TrackedLink({ href, event, params, className, children }: TrackedLinkProps) {
  return (
    <a href={href} className={className} onClick={() => pushEvent(event, params)}>
      {children}
    </a>
  );
}
