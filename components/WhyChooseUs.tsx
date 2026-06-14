const FEATURES = [
  {
    title: "Advanced Purification, Exceptional Purity",
    icon: (
      <>
        <path d="M24 58c7-13 12-21 12-33 0 12 5 20 12 33" fill="#19b7ea" />
        <path d="M17 65c11-10 27-10 38 0 7-8 16-12 27-12 11 0 19 4 27 12v38H17z" fill="#ef1818" />
        <path d="M22 88c7 4 14 4 21 0s14-4 21 0 14 4 21 0 14-4 21 0" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
        <path d="M22 101c7 4 14 4 21 0s14-4 21 0 14 4 21 0 14-4 21 0" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
        <path d="M22 114c7 4 14 4 21 0s14-4 21 0 14 4 21 0 14-4 21 0" fill="none" stroke="#10ace0" strokeWidth="5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Quality Tested, Trust is Earned",
    icon: (
      <>
        <path d="M24 79c10-9 20-9 30 0s20 9 30 0 20-9 30 0" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
        <path d="M24 94c10-9 20-9 30 0s20 9 30 0 20-9 30 0" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
        <path d="M57 25l6-8 7 7 9-1 2 9 7 5-5 8 1 9-9 2-5 7-8-5-9 1-2-9-7-5 5-8-1-9z" fill="#19b7ea" />
        <path d="M58 40l7 7 14-15" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Sustainably Made for a Better Tomorrow",
    square: true,
    icon: (
      <>
        <rect x="25" y="21" width="88" height="104" rx="11" fill="#ef1818" />
        <rect x="40" y="33" width="58" height="76" rx="5" fill="#fff" />
        <circle cx="98" cy="58" r="8" fill="#ffc20d" />
        <circle cx="45" cy="82" r="5" fill="#ffc20d" />
        <path d="M23 96c14 14 35 19 56 15s38-2 50 12v20H23z" fill="#ffc20d" />
        <circle cx="69" cy="97" r="20" fill="#8293a4" />
        <text x="69" y="102" textAnchor="middle" fontSize="15" fill="#fff" fontWeight="700">circle</text>
      </>
    ),
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
              <div
                className={`w-36 h-36 md:w-40 md:h-40 border-10 border-brand-red bg-brand-yellow flex items-center justify-center overflow-hidden ${
                  feature.square ? "rounded-[32px]" : "rounded-full"
                }`}
              >
                <svg viewBox="0 0 138 138" className="w-full h-full" aria-hidden="true">
                  {feature.icon}
                </svg>
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
