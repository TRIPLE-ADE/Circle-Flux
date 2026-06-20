import Image from "next/image";
import CtaButton from "./CtaButton";

export default function Standards() {
  return (
    <section className="bg-brand-cyan text-white relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-end px-6 md:px-8 pt-16 md:pt-20">
        <div className="md:col-span-7 flex flex-col items-start z-10 pb-14 md:pb-20">
          <h2 className="font-hedvig text-3xl md:text-[42px] font-normal leading-[1.12]">
            Pure Water Starts with Higher Standards
          </h2>
          <p className="font-source-sans text-sm md:text-base text-white/90 mt-5 leading-relaxed max-w-[640px]">
            At CircleFlux, we believe great drinking water is more than just hydration. It is a commitment to quality, safety, and wellbeing. That&apos;s why every bottle goes through advanced purification processes and rigorous quality checks to ensure consistent purity and refreshment.
          </p>

          <p className="font-source-sans text-sm md:text-base text-white/90 mt-5 leading-relaxed max-w-[640px]">
            From sourcing and treatment to bottling and distribution, we uphold the highest standards because our customers deserve water they can trust every day.
          </p>

          <div className="mt-7">
            <CtaButton href="/where-to-buy" size="md">
              Where to buy
            </CtaButton>
          </div>
        </div>

        <div className="md:col-span-5 flex justify-center md:justify-end z-10 w-full self-end">
          <div className="relative w-full max-w-[390px] aspect-3/4 md:-mb-1">
            <Image
              src="/images/standards-bg.webp"
              alt="Happy person drinking clean bottle water"
              fill
              className="object-cover object-top"
              sizes="(max-w-768px) 100vw, 340px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
