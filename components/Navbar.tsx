"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Unified Navbar component.
 *
 * @param variant
 *   - "transparent" (default): starts transparent over hero, transitions to
 *     solid white on scroll. Used on the home page.
 *   - "solid": always has a white background with dark text. Fixed and sticky
 *     on scroll. Used on inner pages (about-us, where-to-buy, etc.).
 */

const WHATSAPP_ICON =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

export default function Navbar({
  variant = "transparent",
}: {
  variant?: "transparent" | "solid";
}) {
  const isTransparent = variant === "transparent";

  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerCloseButtonRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    drawerCloseButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
      menuButton?.focus();
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  // --- Derived styles based on variant + scroll state ---

  // For "solid" variant: always white bg, dark text, with shadow on scroll
  // For "transparent" variant: transparent → white on scroll (existing behavior)
  const showSolidBg = !isTransparent || isScrolled;

  const headerClass = [
    "fixed top-0 left-0 w-full z-50",
    hasMounted ? "transition-all duration-300" : "",
  ].join(" ");

  const navClass = [
    "relative w-full min-h-16 md:min-h-20 px-5 md:px-8 flex justify-between items-center",
    hasMounted ? "transition-all duration-300" : "",
    showSolidBg
      ? "bg-white/95 backdrop-blur-md shadow-md text-brand-teal"
      : "bg-transparent text-white",
    // Add bottom border only for solid variant when not scrolled (initial state)
    !isTransparent && !isScrolled ? "border-b border-black/10" : "",
  ].join(" ");

  // Logo: red on solid bg, white on transparent
  const logoSrc = showSolidBg ? "/images/red-logo.png" : "/images/logo.png";

  // CTA button styling adapts
  const ctaClass = showSolidBg
    ? "bg-brand-red text-white hover:bg-brand-red/90"
    : "bg-white text-brand-red hover:bg-white/90";

  // Mobile menu toggle hover
  const menuToggleHover = showSolidBg
    ? "hover:bg-black/5"
    : "hover:bg-white/10";

  return (
    <header className={headerClass}>
      {/* Top Announcement Bar */}
      <div className="w-full bg-brand-yellow text-brand-teal text-center py-2 px-4 text-xs md:text-sm font-semibold tracking-wide font-overpass flex justify-center items-center gap-1 shadow-sm">
        <span>We&apos;re Available To Take Your Order</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      {/* Main Navbar */}
      <nav className={navClass}>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-overpass text-base font-black uppercase">
          <Link href="/" className="hover:text-brand-red transition-colors">
            Home
          </Link>
          <Link
            href="/about-us"
            className="hover:text-brand-red transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/where-to-buy"
            className="hover:text-brand-red transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Centered Logo */}
        <Link
          href="/"
          aria-label="CircleFlux home"
          className="md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          <Image src={logoSrc} alt="CircleFlux Logo" width={140} height={140} />
        </Link>

        {/* Right Side: CTA + Mobile Toggle */}
        <div className="flex items-center gap-4 md:gap-5 font-overpass text-base font-black uppercase">
          <Link
            href="https://wa.link/x16a6c"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-black uppercase transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${ctaClass}`}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d={WHATSAPP_ICON} />
            </svg>
            Place Order
          </Link>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-full transition-colors ${menuToggleHover}`}
          >
            {isMobileMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Backdrop (mobile) */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Drawer */}
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
        inert={!isMobileMenuOpen}
        className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? "visible translate-x-0" : "invisible translate-x-full"
        }`}
      >
        <button
          ref={drawerCloseButtonRef}
          type="button"
          onClick={closeMenu}
          aria-label="Close menu"
          className="absolute right-5 top-5 p-2 rounded-full text-brand-teal hover:bg-black/5 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col gap-6 pt-24 px-6 text-brand-teal font-overpass font-bold uppercase">
          <Link
            href="/"
            onClick={closeMenu}
            className="hover:text-brand-red transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            onClick={closeMenu}
            className="hover:text-brand-red transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/where-to-buy"
            onClick={closeMenu}
            className="hover:text-brand-red transition-colors"
          >
            Contact Us
          </Link>

          <Link
            href="https://wa.link/x16a6c"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="inline-flex items-center justify-center gap-2 mt-4 px-6 py-3 bg-brand-red text-white rounded-full text-base font-black uppercase shadow-lg hover:bg-brand-red/90 transition-all"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d={WHATSAPP_ICON} />
            </svg>
            Place Order
          </Link>
        </div>
      </div>
    </header>
  );
}
