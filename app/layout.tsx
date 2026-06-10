import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import PromoBanner from "@/components/PromoBanner";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OptimizedBnB | Luxury Short-Term Rentals in Houston",
  description:
    "Houston's #1 rated short-term rental host. 21 luxury properties across Med Center, Downtown, EaDo, and Cypress. 500+ 5-star reviews. Personal chef available.",
  keywords: "Houston vacation rental, luxury Airbnb Houston, short term rental Houston, Med Center rental",
  openGraph: {
    title: "OptimizedBnB | Luxury Houston Stays",
    description: "21 luxury properties. 500+ 5-star reviews. Houston's finest STRs.",
    url: "https://optimizedbnb.com",
    siteName: "OptimizedBnB",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "OptimizedBnB",
  description:
    "Luxury short-term rentals in Houston, Texas. 5-star properties near Med Center, Downtown, NRG Stadium.",
  url: "https://optimizedbnb.com",
  telephone: "+17138983055",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Houston",
    addressRegion: "TX",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#111111] text-white font-body antialiased pb-14 md:pb-0">
        <PromoBanner />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
