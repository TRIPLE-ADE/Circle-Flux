import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.png"
        alt="Premium Clean Water Surface Background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-brand-teal/30 to-brand-teal/80 z-10" />
      {/* Hero Content */}
      <div className="relative z-20 text-center flex flex-col items-center px-4 max-w-6xl mt-16 md:mt-24">
        {/* Title */}
        <h1 className="font-hedvig text-4xl md:text-7xl lg:text-8xl text-white font-normal leading-[1.1] tracking-tight drop-shadow-md select-none animate-slide-up">
          Premium Table Water
        </h1>
        {/* Description */}
        <p className="font-overpass text-xl md:text-2xl text-white max-w-xl mt-6 leading-relaxed font-light drop-shadow-sm select-none animate-fade-in-delayed">
          Pure, refreshing, and naturally balanced. Crafted to fuel your active life, one crystal-clear drop at a time.
        </p>
        {/* Interactive Action Button */}
        <div className="mt-10 animate-fade-in-delayed">
          <a
            href="#shop"
            className="inline-block bg-brand-red text-white font-overpass text-sm md:text-base font-black uppercase tracking-wider px-10 py-4 rounded-full border-2 border-brand-yellow shadow-lg shadow-brand-red/20 transform transition-all duration-300 hover:scale-105 hover:bg-brand-red/90 hover:shadow-brand-yellow/30 active:scale-95"
          >
            ORDER NOW
          </a>
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
