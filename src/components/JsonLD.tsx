import { Category, DocPage } from "@/types";

interface JsonLDProps {
  type: "course" | "article";
  data: Category | DocPage;
}

export function JsonLD({ type, data }: JsonLDProps) {
  const structuredData = type === "course" ? {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": (data as Category).label,
    "description": (data as Category).description,
    "provider": {
      "@type": "Organization",
      "name": "Kana Labs",
      "sameAs": "https://kanalabs.io"
    }
  } : {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": (data as DocPage).title,
    "description": (data as DocPage).content.substring(0, 160),
    "author": {
      "@type": "Organization",
      "name": "Kana Labs"
    }
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
