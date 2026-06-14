import Link from "next/link";

export default function PageHeader() {
  return (
    <header className="w-full z-50 bg-white text-[#1d2428]">
      <div className="w-full bg-brand-yellow text-brand-teal text-center py-2 px-4 text-xs md:text-sm font-semibold font-overpass flex justify-center items-center gap-1">
        <span>We&apos;re Available To Take Your Order</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <nav className="relative min-h-12 md:min-h-14 px-4 md:px-8 flex items-center justify-between border-b border-black/10">
        <div className="hidden md:flex items-center gap-8 font-overpass text-[11px] font-black uppercase">
          <Link href="/#shop" className="hover:text-brand-red transition-colors">
            Order
          </Link>
          <Link href="/#our-water" className="hover:text-brand-red transition-colors">
            Our Water
          </Link>
          <Link href="/about-us" className="hover:text-brand-red transition-colors">
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

        <div className="flex items-center gap-5 font-overpass text-[11px] font-black uppercase">
          <Link href="/where-to-buy" className="hidden sm:inline hover:text-brand-red transition-colors">
            Where To Buy
          </Link>
          <button aria-label="Cart" className="relative p-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
