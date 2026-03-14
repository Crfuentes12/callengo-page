"use client";

import Image from "next/image";

interface FeatureImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function FeatureImage({ src, alt, caption }: FeatureImageProps) {
  return (
    <figure className="my-10 rounded-2xl overflow-hidden border border-border shadow-md">
      <div className="relative w-full aspect-[16/9] bg-background-secondary">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      {caption && (
        <figcaption className="px-4 py-3 text-xs text-foreground-tertiary text-center bg-background-secondary/50 border-t border-border">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
