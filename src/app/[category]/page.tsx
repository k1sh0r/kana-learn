import { DocLayout } from "@/components/DocLayout";
import { Data } from "@/data/DocData";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import CategoryPagesGrid from "@/components/CategoryPagesGrid";

const categoryBanners = {
  "crypto-essentials": "/images/crypto-essentials/crypto-essentials-banner-english.jpg",
  "kanaperps": "/images/perps-walkthrough/perps-walkthrough-banner-english.png",
  "perps": "/images/perps-essentials/perps-essentials-banner-english.png",
};

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const { category } = params;
  const foundCategory = Data.categories.find((cat) => cat.slug === category);
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
  const { category } = params;
  const foundCategory = Data.categories.find((cat) => cat.slug === category);
  if (!foundCategory) return notFound();
  const bannerImage = categoryBanners[foundCategory.slug as keyof typeof categoryBanners] || "/images/banners/default.jpg";
  return (
    <DocLayout defaultCollapsed={true}>
      <div className="prose prose-lg max-w-none ">
        <div className="w-full mb-6 overflow-hidden rounded-2xl border-2 border-[#002019]">
          <img 
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
