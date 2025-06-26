import { getDataForLanguage } from '@/data/DocData';
import type { Metadata } from "next";
import DocPageClient from './DocPageClient';
import type { DocPage } from '@/types';

export async function generateMetadata({ params }: { params: { category: string; slug: string } }): Promise<Metadata> {
  const { category, slug } = params;
  const path = `/${category}/${slug}`;
  // Always use English for static metadata
  const data = await getDataForLanguage('en');
  let foundPage: DocPage | null = null;
  for (const cat of data.categories) {
    const matchingPage = cat.pages.find((p: DocPage) => p.slug === path);
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
  return <DocPageClient params={params} />;
}
