'use client'

const ITEMS = [
  "CAC REGISTERED",
  "NAFDAC CERTIFIED",
  "SON CERTIFIED",
  "FACTORY LICENSED",
  "PREMIUM QUALITY",
  "100% PURE WATER",
];

export default function Ticker() {
  return (
    <section className="relative w-full bg-brand-yellow text-[#1d2428] py-4 overflow-hidden z-20">
      {/* Scoped CSS for Marquee animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-scroll {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>

      <div className="relative flex w-full">
        {/* Track */}
        <div className="animate-marquee-scroll flex gap-12 items-center whitespace-nowrap text-base md:text-lg font-hedvig uppercase">
          {/* First loop */}
          {ITEMS.map((item) => (
            <div key={`a-${item}`} className="flex items-center gap-6">
              <span>{item}</span>
              <span className="w-3.5 h-3.5 bg-brand-red rounded-full" />
            </div>
          ))}

          {/* Second loop (for seamless looping) */}
          {ITEMS.map((item) => (
            <div key={`b-${item}`} className="flex items-center gap-6">
              <span>{item}</span>
              <span className="w-3.5 h-3.5 bg-brand-red rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
