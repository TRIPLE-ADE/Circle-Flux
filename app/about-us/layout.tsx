import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the CircleFlux story and our commitment to producing clean, safe, naturally balanced bottled water in Nigeria.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About CircleFlux",
    description:
      "Our story, standards, and commitment to clean, safe bottled water in Nigeria.",
    url: "/about-us",
    images: [{ url: "/images/about-bg.webp", width: 1920, height: 928, alt: "Clean natural water from CircleFlux" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About CircleFlux",
    description: "Our story and commitment to clean, safe bottled water in Nigeria.",
    images: ["/images/about-bg.webp"],
  },
};

export default function AboutUsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
