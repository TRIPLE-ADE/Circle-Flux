import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where to Buy",
  description:
    "Contact CircleFlux, get directions to our Ogun State factory, or order premium bottled table water for retail and wholesale supply.",
  alternates: { canonical: "/where-to-buy" },
  openGraph: {
    title: "Where to Buy CircleFlux Water",
    description: "Contact CircleFlux or get directions to our factory in Ogun State, Nigeria.",
    url: "/where-to-buy",
    images: [{ url: "/images/bottle.webp", width: 1130, height: 1268, alt: "CircleFlux bottled water pack" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to Buy CircleFlux Water",
    description: "Contact CircleFlux or get directions to our factory in Ogun State, Nigeria.",
    images: ["/images/bottle.webp"],
  },
};

export default function WhereToBuyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
