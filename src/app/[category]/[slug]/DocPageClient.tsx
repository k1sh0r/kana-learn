"use client";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { DocLayout } from "@/components/DocLayout";
import { useLanguage } from '@/context/LanguageContext';
import { useEffect, useState } from 'react';
import { getDataForLanguage } from '@/data/DocData';
import { notFound } from "next/navigation";
import type { DocPage } from '@/types';

export default function DocPageClient({ params }: { params: { category: string; slug: string } }) {
  const { language, showToastIfFallback } = useLanguage();
  const [foundPage, setFoundPage] = useState<DocPage | null>(null);
  const [loading, setLoading] = useState(true);
  const { category, slug } = params;
  const path = `/${category}/${slug}`;
  useEffect(() => {
    setLoading(true);
    getDataForLanguage(language, showToastIfFallback).then(data => {
      let page: DocPage | null = null;
      for (const cat of data.categories) {
        const matchingPage = cat.pages.find((p: DocPage) => p.slug === path);
        if (matchingPage) {
          page = matchingPage;
          break;
        }
      }
      setFoundPage(page);
      setLoading(false);
    });
  }, [language, showToastIfFallback, path]);
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