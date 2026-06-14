"use client";

import { useLayoutEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const animationFrame = window.requestAnimationFrame(() => {
      handleScroll();
      setHasMounted(true);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${hasMounted ? "transition-all duration-300" : ""}`}>
      {/* Top Announcement Bar */}
      <div className="w-full bg-brand-yellow text-brand-teal text-center py-2 px-4 text-xs md:text-sm font-semibold tracking-wide font-overpass flex justify-center items-center gap-1 shadow-sm">
        <span>We&apos;re Available To Take Your Order</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Main Navbar */}
      <nav
        className={`relative w-full ${hasMounted ? "transition-all duration-300" : ""} min-h-14 px-5 md:px-8 flex justify-between items-center ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md text-brand-teal"
          : "bg-transparent text-white"
          }`}
      >
        <div className="hidden md:flex items-center gap-8 font-overpass text-[11px] font-black uppercase">
          <Link href="/#shop" className="hover:opacity-80 transition-opacity">
            Order
          </Link>
          <Link href="/#our-water" className="hover:opacity-80 transition-opacity">
            Our Water
          </Link>
          <Link href="/about-us" className="hover:opacity-80 transition-opacity">
            About Us
          </Link>
        </div>

        <Link
          href="/"
          aria-label="CircleFlux home"
          className="md:absolute md:left-1/2 md:-translate-x-1/2 bg-brand-red text-white px-5 py-1 font-overpass text-2xl font-black leading-none"
        >
          circle
        </Link>

        <div className="flex items-center gap-4 md:gap-5 font-overpass text-[11px] font-black uppercase">
          <Link href="/where-to-buy" className="hidden sm:inline hover:opacity-80 transition-opacity">
            Where To Buy
          </Link>

          <button
            type="button"
            aria-label="Cart"
            className={`relative p-1 rounded-full transition-colors ${isScrolled ? "hover:bg-brand-teal/5" : "hover:bg-white/10"
              }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-white/10"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 font-source-sans text-brand-teal text-lg font-semibold gap-6">
          <Link
            href="/#shop"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-brand-cyan transition-colors"
          >
            Order
          </Link>
          <Link
            href="/about-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-brand-cyan transition-colors"
          >
            About
          </Link>
          <Link
            href="/#our-water"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-brand-cyan transition-colors"
          >
            Our Water
          </Link>
          <Link
            href="/where-to-buy"
            onClick={() => setIsMobileMenuOpen(false)}
            className="hover:text-brand-cyan transition-colors"
          >
            Where To Buy
          </Link>
        </div>
      </div>
    </header>
  );
}
