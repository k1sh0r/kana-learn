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
        <p className="text-md mb-8">
        This platform is designed to help you understand the world of cryptocurrency through clear, structured learning. Whether you`re just starting out or looking to level up your skills, our step-by-step modules and walkthroughs guide you through everything from trading basics to hands-on strategy. We now offer three learning tracks: 
        </p>
        {/* <p className="text-md mb-8">
        <span><b>Crypto Essentials</b>: a beginner-friendly course that covers wallets, swaps, tokens, and on-chain actions. </span><br></br>
        <span><b>Perpetual Futures Essentials</b>: our newest track, focused on leveraged trading and risk strategy. Updated regularly. </span><br></br>
        <span><b>Kana Perps Walkthroughs</b>: step-by-step guides showing exactly what to click, how to trade, and how to manage positions on Kana Perps. </span>
        </p> */}
        <p className="text-md mb-8">
        Start wherever you like — and come back often. We update weekly.
        </p>
        <DocsCardGrid />
      </div>
    </DocLayout>
  );
}
