"use client";
import { DocLayout } from "@/components/DocLayout";
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';
import { getDataForLanguage } from '@/data/DocData';
import { notFound } from "next/navigation";
import CategoryPagesGrid from "@/components/CategoryPagesGrid";
import OptImage from "@/components/OptImage";
import { Category } from '@/types';

const categoryBanners = {
  "crypto-essentials": "/images/crypto-essentials/crypto-essentials-banner-english.jpg",
  "kanaperps": "/images/perps-walkthrough/perps-walkthrough-banner-english.png",
  "perps": "/images/perps-essentials/perps-essentials-banner-english.png",
};

export default function CategoryPageClient({ params }: { params: { category: string } }) {
  const { language, showToastIfFallback } = useLanguage();
  const [foundCategory, setFoundCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const { category } = params;
  useEffect(() => {
    setLoading(true);
    getDataForLanguage(language, showToastIfFallback).then(data => {
      const cat = data.categories.find((cat: Category) => cat.slug === category) || null;
      setFoundCategory(cat);
      setLoading(false);
    });
  }, [language, showToastIfFallback, category]);
  if (loading) return <div className="py-12 text-center text-muted-foreground">Loading...</div>;
  if (!foundCategory) return notFound();
  const bannerImage = categoryBanners[foundCategory.slug as keyof typeof categoryBanners] || "/images/banners/default.jpg";
  return (
    <DocLayout defaultCollapsed={true}>
      <div className="prose prose-lg max-w-none ">
        <div className="w-full mb-6 overflow-hidden rounded-2xl border-2 border-[#002019]">
          <OptImage 
            src={bannerImage}
            alt={foundCategory.label}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">{foundCategory.label}</h1>
        {foundCategory.description && (
          <div className="mb-12">
            <CategoryPagesGrid foundCategory={foundCategory} />
          </div>
        )}
      </div>
    </DocLayout>
  );
} 