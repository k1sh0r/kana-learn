import type { Metadata } from "next";
import { Inter, Fira_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const firaMono = Fira_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Kana Learn | Crypto & Blockchain Education",
    template: "%s | Kana Learn",
  },
  description: "Kana Learn is the ultimate platform to master cryptocurrency and blockchain concepts from beginner to expert level, with comprehensive guides and tutorials.",
  openGraph: {
    title: "Kana Learn | Crypto & Blockchain Education",
    description: "Kana Learn is the ultimate platform to master cryptocurrency and blockchain concepts from beginner to expert level, with comprehensive guides and tutorials.",
    url: "https://kanalearn.com/",
    siteName: "Kana Learn",
    images: [
      {
        url: "/images/kana-logo.png",
        width: 512,
        height: 512,
        alt: "Kana Learn Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kana Learn | Crypto & Blockchain Education",
    description: "Kana Learn is the ultimate platform to master cryptocurrency and blockchain concepts from beginner to expert level, with comprehensive guides and tutorials.",
    images: ["/images/kana-logo.png"],
    creator: "@kana_trade",
  },
  icons: {
    icon: "/images/kana-logo.png",
    shortcut: "/images/kana-logo.png",
    apple: "/images/kana-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/kana-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/kana-logo.png" />
        <meta name="theme-color" content="#00a5ff" />
      </head>
      <body className={`${inter.variable} ${firaMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
