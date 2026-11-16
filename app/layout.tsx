import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import { site } from "@/src/data/site";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  ...(site.url && { metadataBase: new URL(site.url), alternates: { canonical: "/" } }),
  robots: { index: site.indexable, follow: true },
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: site.name,
    title: site.title,
    description: site.description,
    ...(site.url && { url: site.url, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Vin Rouge · Tradición vinícola" }] }),
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    ...(site.url && { images: [new URL("/opengraph-image", site.url).href] }),
  },
  icons: { icon: "/images/logo-brown.svg", apple: "/images/logo-brown.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${libreBaskerville.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
