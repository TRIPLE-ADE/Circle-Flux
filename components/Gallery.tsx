import Image from "next/image";

export default function Gallery() {
  const photos = [
    { id: 1, src: "/images/gallery-1.png", alt: "Active happy customer in safari hat" },
    { id: 2, src: "/images/gallery-2.png", alt: "Happy toddler drinking clear water" },
    { id: 3, src: "/images/gallery-3.png", alt: "Pregnant woman enjoying fresh water" },
    { id: 4, src: "/images/gallery-4.png", alt: "Healthy runner drinking from bottle" },
  ];

  return (
    <section className="py-16 md:py-20 px-5 md:px-12 bg-white text-[#1d2428] relative z-20">
      <div className="max-w-6xl mx-auto text-center">

        <div className="mb-12">
          <h2 className="font-hedvig text-3xl md:text-[38px] font-normal leading-tight">
            Our people are happy
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative w-full aspect-[4/5] overflow-hidden group bg-slate-50"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-w-768px) 50vw, 250px"
              />
              <div className="absolute inset-0 bg-brand-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="mt-14">
          <button className="bg-brand-red text-white font-overpass text-[10px] font-black uppercase px-6 py-3 rounded-full border-2 border-brand-yellow hover:bg-brand-red/90 active:scale-95 transition-all">
            Follow Us
          </button>
        </div>

      </div>
    </section>
  );
}
