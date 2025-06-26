import { getDataForLanguage } from '@/data/DocData';
import type { Metadata } from "next";
import CategoryPageClient from './CategoryPageClient';
import type { Category } from '@/types';

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const { category } = params;
  // Always use English for static metadata
  const data = await getDataForLanguage('en');
  const foundCategory = data.categories.find((cat: Category) => cat.slug === category);
  if (!foundCategory) return { title: "Category Not Found | Kana Learn" };
  return {
    title: `${foundCategory.label} | Kana Learn`,
    description: foundCategory.description?.replace(/[#>*_\-\n]/g, "").slice(0, 160) + "...",
    openGraph: {
      title: `${foundCategory.label} | Kana Learn`,
      description: foundCategory.description?.replace(/[#>*_\-\n]/g, "").slice(0, 160) + "...",
      images: [
        { url: "/images/kana-logo.png", width: 512, height: 512, alt: "Kana Learn Logo" },
      ],
    },
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  return <CategoryPageClient params={params} />;
}
