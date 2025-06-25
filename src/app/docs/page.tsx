import { DocLayout } from "@/components/DocLayout";
import DocsCardGrid from "@/components/DocsCardGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | Kana Learn",
  description: "Browse all crypto and blockchain learning modules on Kana Learn. Start your journey with beginner to advanced guides.",
  openGraph: {
    title: "Documentation | Kana Learn",
    description: "Browse all crypto and blockchain learning modules on Kana Learn. Start your journey with beginner to advanced guides.",
    images: [
      { url: "/images/kana-logo.png", width: 512, height: 512, alt: "Kana Learn Logo" },
    ],
  },
};

export default function DocsHome() {
  return (
    <DocLayout hideSidebar>
      <div className="prose prose-lg max-w-none">
        <h1 className="text-3xl font-bold mb-6">Welcome to Kana Learn!</h1>
        <p className="text-lg mb-8">
          This platform is designed to help you understand the world of cryptocurrency through clear, structured learning. Whether you&apos;re just starting out or looking to solidify your knowledge, our step-by-step guides walk you through the essentials of crypto trading, wallets, tokens, and real on-chain tools.
          <br />
          <br />
          We&apos;re launching with Crypto Onboarding Essentials — a beginner-friendly course that covers everything you need to get started with confidence.
          More walkthroughs and practical materials are on the way. Start here — and check back soon for what&apos;s next.
        </p>
        <DocsCardGrid />
      </div>
    </DocLayout>
  );
}
