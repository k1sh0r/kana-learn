"use client";
import Link from "next/link";
import { getDataForLanguage } from '@/data/DocData';
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';
import OptImage from "./OptImage";
import { Category } from '@/types';

const categoryCardImages = {
  "crypto-essentials": "/images/thumbnails/crypto-essentials.jpg",
  "kanaperps": "/images/thumbnails/kana-perps-thumbnail-english.jpg",
  "perps": "/images/thumbnails/perps-essentials-english.jpg",
};

export default function DocsCardGrid() {
  const { language } = useLanguage();
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    getDataForLanguage(language).then(data => setCategories(data.categories));
  }, [language]);
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {categories.sort((a, b) => a.position - b.position).map((category) => {
        const cardImage = categoryCardImages[category.slug as keyof typeof categoryCardImages] || "/images/banners/default.jpg";
        return (
          <div className="relative overflow-visible" key={category.id}>
            <Link href={`/${category.slug}`} className="block border border-border rounded-lg hover:border-primary-300 transition-colors overflow-hidden no-underline">
              {category.isNew && (
                <span className="absolute -right-1 -top-2 text-xs px-3 py-1 rounded-full bg-primary-600/80 text-white backdrop-blur-sm shadow-sm rotate-3 z-10">
                  New
                </span>
              )}
              <div className="h-40 overflow-hidden">
                <OptImage src={cardImage} alt={category.label} width={1000} height={1000} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">
                  {category.label}
                </h2>
                <ul className="space-y-1 mb-4 hidden">
                  {category.pages.sort((a, b) => (a.sidebar_position || 0) - (b.sidebar_position || 0)).slice(0, 3).map(page => <li key={page.id}>
                        <span className="text-primary-600">
                          {page.sidebar_label || page.title}
                        </span>
                      </li>)}
                </ul>
                <span className="text-sm text-muted-foreground">
                  {category.cardContent || "A beginner-friendly course that covers wallets, swaps, tokens, and on-chain actions."}
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
} 