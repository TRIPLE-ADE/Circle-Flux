import Image from "next/image";

const FEATURES = [
  {
    title: "Advanced Purification, Exceptional Purity",
    image: "/images/circleflux-1.png",
  },
  {
    title: "Quality Tested, Trust is Earned",
    image: "/images/circleflux-2.png",
  },
  {
    title: "Sustainably Made for a Better Tomorrow",
    image: "/images/circleflux-3.png",
  },
];

export default function WhyChooseUs() {

  return (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-brand-pink text-[#1d2428] relative z-20">
      <div className="max-w-6xl mx-auto text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.04em] font-overpass block mb-3">
          Meet Circleflux
        </span>
        <h2 className="font-overpass text-2xl md:text-[34px] font-black max-w-2xl mx-auto leading-tight text-[#1d2428]">
          We&apos;re Committed to Refreshing Life, One Bottle at a Time.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 mt-14 max-w-4xl mx-auto">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              <div className="relative w-full h-[200px]">
                <Image src={feature.image} alt={feature.title} fill className="object-contain" />
              </div>
              <h3 className="font-overpass text-base md:text-lg font-black leading-tight max-w-[220px] mt-6 text-[#1d2428]">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
