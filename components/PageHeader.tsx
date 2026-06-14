"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PageHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="relative w-full z-50 bg-white text-[#1d2428]">
      {/* Announcement Bar */}
      <div className="w-full bg-brand-yellow text-brand-teal text-center py-2 px-4 text-xs md:text-sm font-semibold font-overpass flex justify-center items-center gap-1">
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

      {/* Navbar */}
      <nav className="relative min-h-16 md:min-h-20 px-4 md:px-8 flex items-center justify-between border-b border-black/10">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-overpass text-base font-black uppercase">
          <Link href="/" className="hover:text-brand-red transition-colors">
            Home
          </Link>

          <Link
            href="/#shop"
            className="hover:text-brand-red transition-colors"
          >
            Order
          </Link>

          <Link
            href="/#our-water"
            className="hover:text-brand-red transition-colors"
          >
            Our Water
          </Link>

          <Link
            href="/about-us"
            className="hover:text-brand-red transition-colors"
          >
            About Us
          </Link>
        </div>

        {/* Logo */}
        <Link
          href="/"
          aria-label="CircleFlux home"
          className="md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          <Image
            src="/images/red-logo.png"
            alt="CircleFlux Logo"
            width={140}
            height={140}
          />
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-4 md:gap-5 font-overpass text-base font-black uppercase">
          <Link
            href="/where-to-buy"
            className="hidden sm:inline hover:text-brand-red transition-colors"
          >
            Where To Buy
          </Link>

          {/* Cart */}
          <button
            type="button"
            aria-label="Cart"
            className="relative p-1 rounded-full hover:bg-black/5 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-full hover:bg-black/5 transition-colors"
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

      {/* Backdrop */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 pt-24 px-6 text-brand-teal font-overpass font-bold uppercase">
          <Link
            href="/"
            onClick={closeMenu}
            className="hover:text-brand-red transition-colors"
          >
            Home
          </Link>

          <Link
            href="/#shop"
            onClick={closeMenu}
            className="hover:text-brand-red transition-colors"
          >
            Order
          </Link>

          <Link
            href="/#our-water"
            onClick={closeMenu}
            className="hover:text-brand-red transition-colors"
          >
            Our Water
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
            Where To Buy
          </Link>
        </div>
      </div>
    </header>
  );
}