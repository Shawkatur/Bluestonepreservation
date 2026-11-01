import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/company";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: company.seo.title,
  description: company.seo.description,
  metadataBase: new URL(company.seo.url),
  keywords: [
    "property maintenance Atlanta GA",
    "property preservation Atlanta",
    "property preservation services Georgia",
    "property repair services Atlanta",
    "property maintenance contractors Atlanta",
    "debris removal Atlanta",
    "property cleanup Atlanta",
    "property inspection services Atlanta",
    "rental property maintenance Atlanta",
  ],
  openGraph: {
    title: company.seo.title,
    description: company.seo.description,
    url: company.seo.url,
    siteName: company.shortName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: company.shortName,
    description: company.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.legalName,
    description: company.seo.description,
    url: company.seo.url,
    email: company.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.mapCenter.lat,
      longitude: company.mapCenter.lng,
    },
    areaServed: company.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
