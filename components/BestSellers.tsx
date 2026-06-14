import Image from "next/image";
import CtaButton from "./CtaButton";

export default function BestSellers() {
  const products = [
    {
      id: 1,
      size: "50cl Pack",
      badge: "SALE",
      image: "/images/bottle-pack.png",
    },
    {
      id: 2,
      size: "75cl Pack",
      badge: "SALE",
      image: "/images/bottle-pack.png",
    },
    {
      id: 3,
      size: "1.5L Pack",
      badge: "SALE",
      image: "/images/bottle-pack.png",
    },
  ];

  return (
    <section id="shop" className="py-16 md:py-20 px-6 md:px-12 bg-brand-pink text-[#1d2428] relative z-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.04em] font-overpass block mb-7">
            Product Range
          </span>
          <h2 className="font-overpass text-2xl md:text-[34px] font-black max-w-3xl mx-auto leading-tight text-[#1d2428]">
            50cl, 75cl, 1.5L Bottled Water & Case Packs for Wholesale Distribution
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {products.map((prod) => (
            <div
              key={prod.id}
              className="flex flex-col items-center relative group"
            >
              <div className="w-full aspect-[1.16] bg-[#edf2f9] relative flex items-center justify-center mb-7">
                <span className="absolute top-3 left-3 z-10 bg-brand-red text-white font-overpass text-[9px] font-black uppercase px-3 py-1 rounded-full">
                  {prod.badge}
                </span>
                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-[1.03]">
                  <Image
                    src={prod.image}
                    alt={`${prod.size} Case`}
                    fill
                    className="object-contain"
                    sizes="(max-w-768px) 100vw, 320px"
                  />
                </div>
              </div>

              <CtaButton>
                Order Now
              </CtaButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
