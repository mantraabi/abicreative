import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abi Creative — Digital Solutions Agency",
  description: "Kami membangun produk digital yang bermakna untuk Indonesia. Spesialis web development, AI integration, dan SaaS.",
  keywords: ["digital agency", "web development", "AI", "SaaS", "Abi Creative", "Tulisin", "SoalKu", "Indonesia"],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Abi Creative — Digital Solutions Agency",
    description: "Kami membangun produk digital yang bermakna untuk Indonesia.",
    url: "https://abicreative.id",
    siteName: "Abi Creative",
    type: "website",
    locale: "id_ID",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Abi Creative" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abi Creative — Digital Solutions Agency",
    description: "Kami membangun produk digital yang bermakna untuk Indonesia.",
    images: ["/og-image.svg"],
  },
  metadataBase: new URL("https://abicreative.id"),
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
