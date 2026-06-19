import type { Metadata } from "next";
import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Abi Creative",
  url: "https://www.abicreative.web.id",
  logo: "https://www.abicreative.web.id/favicon.svg",
  description: "Digital Solutions Agency Indonesia. Membangun produk digital bermakna untuk Indonesia.",
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karanganyar",
    addressRegion: "Jawa Tengah",
    addressCountry: "ID",
  },
  sameAs: [
    "https://github.com/mantraabi",
    "https://www.instagram.com/abicreativelabs/",
    "https://t.me/abicreativelabs",
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Integration" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Development" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Abi Creative",
  url: "https://www.abicreative.web.id",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.abicreative.web.id/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const metadata: Metadata = {
  title: "Abi Creative — Digital Solutions Agency Indonesia",
  description: "Abi Creative membangun produk digital bermakna untuk Indonesia. Spesialis web development, AI integration, SaaS, dan solusi digital untuk UMKM.",
  keywords: [
    "digital agency indonesia",
    "web development indonesia",
    "jasa pembuatan website",
    "AI integration",
    "SaaS development",
    "aplikasi UMKM",
    "Abi Creative",
    "Tulisin",
    "SoalKu",
    "CBT Sekolah",
    "kasir digital",
    "solusi digital indonesia",
    "developer indonesia",
  ],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Abi Creative — Digital Solutions Agency Indonesia",
    description: "Kami membangun produk digital yang bermakna untuk Indonesia. Web development, AI, SaaS, dan solusi UMKM.",
    url: "https://www.abicreative.web.id",
    siteName: "Abi Creative",
    type: "website",
    locale: "id_ID",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Abi Creative — Digital Solutions Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abi Creative — Digital Solutions Agency Indonesia",
    description: "Kami membangun produk digital yang bermakna untuk Indonesia.",
    images: ["/og-image.svg"],
  },
  metadataBase: new URL("https://www.abicreative.web.id"),
  alternates: {
    canonical: "https://www.abicreative.web.id",
  },
  verification: {
    google: "3R7pD2Yg6AIfx-4NMcFIm-xkufwDMKnSxlaScseUYXE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
