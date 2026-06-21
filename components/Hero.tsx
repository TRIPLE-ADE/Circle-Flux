"use client";

import CtaButton from "./CtaButton";
import ViewportVideo from "./ViewportVideo";

export default function Hero() {
  return (
    <section
      aria-label="Hero section introducing premium table water brand"
      className="relative w-full min-h-[95vh] flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Background Video — GPU-composited layer to prevent scroll jank */}
      <ViewportVideo
        src="/videos/hero-video.mp4"
        poster="/images/hero-bg.webp"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-linear-to-b from-black/45 via-brand-teal/25 to-brand-teal/70 z-10" />
      <div className="absolute inset-0 bg-black/15 z-10" />
      {/* Hero Content */}
      <div className="relative z-20 text-center flex flex-col items-center px-4 max-w-6xl">
        {/* Title */}
        <h1 className="font-hedvig text-5xl md:text-8xl lg:text-[104px] text-white font-normal leading-[1.03] tracking-normal drop-shadow-lg select-none animate-slide-up">
          Premium Table Water
        </h1>
        {/* Description */}
        <p className="font-overpass text-xl md:text-2xl text-white max-w-xl mt-6 leading-relaxed font-light drop-shadow-sm select-none animate-fade-in-delayed">
          Pure, refreshing, and naturally balanced. Crafted to fuel your active life, one crystal-clear drop at a time.
        </p>
        {/* Interactive Action Button */}
        <div className="mt-10 animate-fade-in-delayed">
          <CtaButton href="/#shop" size="md">
            ORDER NOW
          </CtaButton>
        </div>
      </div>
      {/* Wave bottom decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[2px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[30px] md:h-[60px]"
          fill="#FDF1F0"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,87.43,26.8,162.58,47.88,245.56,60.84,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
