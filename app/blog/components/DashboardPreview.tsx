"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DashboardPreviewProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  linkHref?: string;
  linkLabel?: string;
}

export default function DashboardPreview({
  image,
  alt,
  title,
  description,
  linkHref = "https://app.callengo.com/auth/signup",
  linkLabel = "Try it free",
}: DashboardPreviewProps) {
  return (
    <div className="my-10 rounded-2xl border border-border overflow-hidden bg-white shadow-sm">
      <div className="relative w-full aspect-[16/9] bg-background-secondary">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      <div className="p-5 md:p-6">
        <h4 className="text-base font-semibold text-foreground mb-1.5">
          {title}
        </h4>
        <p className="text-sm text-foreground-secondary mb-4">{description}</p>
        <Link
          href={linkHref}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric hover:text-electric/80 transition-colors"
        >
          {linkLabel}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
