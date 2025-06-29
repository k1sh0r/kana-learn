"use client";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { DocLayout } from "@/components/DocLayout";
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';
import { getDataForLanguage } from '@/data/DocData';
import { notFound } from "next/navigation";
import type { DocPage } from '@/types';
import { showToast } from '@/components/ui/sonner';

let languageFallbackToastShown = false;

export default function DocPageClient({ params }: { params: { category: string; slug: string } }) {
  const { language, setLanguage } = useLanguage();
  const [foundPage, setFoundPage] = useState<DocPage | null>(null);
  const [loading, setLoading] = useState(true);
  const { category, slug } = params;
  const path = `/${category}/${slug}`;
  useEffect(() => {
    setLoading(true);
    getDataForLanguage(language, category).then(({ categories, usedLanguage }) => {
      let page: DocPage | null = null;
      for (const cat of categories) {
        const matchingPage = cat.pages.find((p: DocPage) => p.slug === path);
        if (matchingPage) {
          page = matchingPage;
          break;
        }
      }
      setFoundPage(page);
      setLoading(false);
      if (usedLanguage !== language && !languageFallbackToastShown) {
        showToast({ title: 'Language not available', description: 'Reverting back to English' });
        setLanguage('en');
        languageFallbackToastShown = true;
      }
    });
    return () => { languageFallbackToastShown = false; };
  }, [language, category, path, setLanguage]);
  if (loading) return <div className="py-12 text-center text-muted-foreground">Loading...</div>;
  if (!foundPage) return notFound();
  return (
    <DocLayout>
      <article>
        <MarkdownRenderer content={foundPage.content} />
      </article>
    </DocLayout>
  );
} 