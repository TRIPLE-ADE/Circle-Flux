import type { Metadata } from "next";
import { Hedvig_Letters_Serif, Overpass, Source_Sans_3 } from "next/font/google";
import ScrollRestoration from "@/components/ScrollRestoration";
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
  title: "CircleFlux - Premium Table Water",
  description: "Our water should be 100% clean & natural. Shop our premium table water.",
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
