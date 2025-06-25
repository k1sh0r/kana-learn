import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { DocLayout } from "@/components/DocLayout";
import { Data } from "@/data/DocData";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { category: string; slug: string } }): Promise<Metadata> {
  const { category, slug } = params;
  const path = `/${category}/${slug}`;
  let foundPage = null;
  for (const cat of Data.categories) {
    const matchingPage = cat.pages.find((p) => p.slug === path);
    if (matchingPage) {
      foundPage = matchingPage;
      break;
    }
  }
  if (!foundPage) return { title: "Page Not Found | Kana Learn" };
  return {
    title: `${foundPage.title} | Kana Learn`,
    description: foundPage.content.replace(/[#>*_\-\n]/g, "").slice(0, 160) + "...",
    openGraph: {
      title: `${foundPage.title} | Kana Learn`,
      description: foundPage.content.replace(/[#>*_\-\n]/g, "").slice(0, 160) + "...",
      images: [
        { url: "/images/kana-logo.png", width: 512, height: 512, alt: "Kana Learn Logo" },
      ],
    },
  };
}

export default function DocPage({ params }: { params: { category: string; slug: string } }) {
  const { category, slug } = params;
  const path = `/${category}/${slug}`;
  let foundPage = null;
  for (const cat of Data.categories) {
    const matchingPage = cat.pages.find((p) => p.slug === path);
    if (matchingPage) {
      foundPage = matchingPage;
      break;
    }
  }
  if (!foundPage) return notFound();
  return (
    <DocLayout>
      <article>
        <MarkdownRenderer content={foundPage.content} />
      </article>
    </DocLayout>
  );
}
