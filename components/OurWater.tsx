

export default function OurWater() {
  return (
    <section id="our-water" className="py-16 md:py-20 px-6 md:px-12 bg-white text-[#1d2428] relative z-20">
      <h2 className="font-overpass text-3xl md:text-[34px] text-center font-black leading-tight text-[#1d2428]">
        Our Water
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mt-12">
        <div className="flex flex-col items-start">
          <p className="font-source-sans text-sm md:text-[15px] text-[#556064] leading-relaxed">
            CircleFlux Bottled Water is a trusted source of pure, refreshing and high-quality drinking water dedicated to supporting the health and wellbeing of individuals, families, and communities across Nigeria.
          </p>
          <p className="font-source-sans text-sm md:text-[15px] text-[#556064] mt-5 leading-relaxed">
            Carefully sourced and processed using advanced purification technology, CircleFlux provides consumers with the confidence that comes from knowing they are drinking water that meets the highest standards of purity, clarity, and safety.
          </p>

          <a
            href="#our-story"
            className="font-overpass text-xs font-black text-brand-red uppercase hover:opacity-85 transition-opacity mt-5"
          >
            read more &gt;&gt;
          </a>
        </div>

        <div className="flex justify-center md:justify-end relative">
          <div className="relative w-full max-w-[420px] aspect-video overflow-hidden rounded-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/water-pour.png"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/about-water-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
