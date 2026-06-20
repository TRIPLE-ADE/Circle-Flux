import type { Metadata } from "next";
import { Hedvig_Letters_Serif, Overpass, Source_Sans_3 } from "next/font/google";
import ScrollRestoration from "@/components/ScrollRestoration";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
});

const hedvigSerif = Hedvig_Letters_Serif({
  variable: "--font-hedvig",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CircleFlux | Premium Table Water",
    template: "%s | CircleFlux",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "premium table water",
    "bottled water Nigeria",
    "purified water Ogun State",
    "wholesale bottled water",
    "CircleFlux",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: SITE_NAME,
    title: "CircleFlux | Premium Table Water",
    description: SITE_DESCRIPTION,
    url: "/",
    images: [{ url: "/images/hero-bg.webp", width: 1920, height: 928, alt: "CircleFlux premium table water" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CircleFlux | Premium Table Water",
    description: SITE_DESCRIPTION,
    images: ["/images/hero-bg.webp"],
  },
  robots: { index: true, follow: true },
  formatDetection: { email: false, address: false, telephone: false },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sourceSans.variable} ${overpass.variable} ${hedvigSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
