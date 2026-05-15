import type { Metadata } from "next";
import LenisProvider from "@/components/LenisProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrewCraft — Premium Crafted Coffee Experience",
  description:
    "Discover the art of premium coffee. BrewCraft delivers handcrafted espresso, cappuccinos, lattes, and cold brews sourced from the world's finest sustainable farms. Every cup tells a story.",
  keywords: "premium coffee, artisan coffee, espresso, cappuccino, latte, cold brew, sustainable coffee",
  openGraph: {
    title: "BrewCraft — Premium Crafted Coffee Experience",
    description: "Every cup tells a story of flavor, aroma, and craftsmanship.",
    type: "website",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
