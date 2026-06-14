import Link from "next/link";
import CtaButton from "./CtaButton";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-yellow text-[#1d2428] pt-14 pb-6 relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5 flex flex-col items-start gap-6">
            <h3 className="font-overpass text-lg md:text-xl font-black uppercase leading-tight max-w-[420px]">
              CARE ABOUT QUALITY WATER THAT MAKES YOU FEEL REFRESHED PACKED WITH ESSENTIAL NUTRIENT, THEN GET CIRCLEFLUX WATER TODAY!
            </h3>
            <CtaButton href="/where-to-buy" variant="footer">
              Place Order
            </CtaButton>
          </div>

          <div className="hidden md:block md:col-span-1" />

          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-overpass text-base font-black">
              Shop
            </h4>
            <div className="flex flex-col gap-2 font-source-sans text-sm text-[#1d2428]/75">
              <Link href="/where-to-buy" className="hover:text-brand-red transition-colors">
                Where to buy
              </Link>
              <Link href="/#shop" className="hover:text-brand-red transition-colors">
                Our Products
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-overpass text-base font-black">
              Help
            </h4>
            <div className="flex flex-col gap-2 font-source-sans text-sm text-[#1d2428]/75">
              <Link href="/where-to-buy" className="hover:text-brand-red transition-colors">
                Contact Us
              </Link>
              <Link href="#contact" className="hover:text-brand-red transition-colors">
                Privacy Policy
              </Link>
              <Link href="#contact" className="hover:text-brand-red transition-colors">
                Terms and Condition
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-overpass text-base font-black">
              Social
            </h4>
            <div className="flex flex-col gap-2 font-source-sans text-sm text-[#1d2428]/75">
              <a href="#" className="hover:text-brand-red transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-brand-red transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-brand-red transition-colors">
                Twitter (X)
              </a>
              <a href="#" className="hover:text-brand-red transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        <div className="pt-12 text-center">
          <span className="font-overpass text-[18vw] md:text-[160px] lg:text-[190px] font-black text-brand-red leading-none select-none block w-full">
            CircleFlux
          </span>
          <p className="font-source-sans text-xs font-semibold text-[#1d2428]/65 mt-1 select-none">
            Designed and developed by designbykode website services
          </p>
        </div>

      </div>
    </footer>
  );
}
