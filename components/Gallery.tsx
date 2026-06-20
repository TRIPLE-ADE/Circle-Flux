import Image from "next/image";
import CtaButton from "./CtaButton";

type GalleryProps = {
  title?: string;
  actionLabel?: string;
};

const PHOTOS = [
  { id: 1, src: "/images/gallery-1.webp", alt: "Active happy customer in safari hat" },
  { id: 2, src: "/images/gallery-2.webp", alt: "Happy toddler drinking clear water" },
  { id: 3, src: "/images/gallery-3.webp", alt: "Pregnant woman enjoying fresh water" },
  { id: 4, src: "/images/gallery-4.webp", alt: "Healthy runner drinking from bottle" },
];

export default function Gallery({ title = "Our people are happy", actionLabel = "Follow Us" }: GalleryProps) {
  const instagramUrl = "https://www.instagram.com/circlefluxng?igsh=Mm9jNmZ4cmRrODhh";

  return (
    <section className="py-16 md:py-20 px-5 md:px-12 bg-white text-[#1d2428] relative z-20">
      <div className="max-w-6xl mx-auto text-center">

        <div className="mb-12">
          <h2 className="font-hedvig text-3xl md:text-[38px] font-normal leading-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {PHOTOS.map((photo) => (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={photo.id}
              className="relative w-full aspect-4/5 overflow-hidden group bg-slate-50 block"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-w-768px) 50vw, 250px"
              />
              {/* Clickable Social Media Link Overlay on Hover */}
              <div className="absolute inset-0 bg-brand-teal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white gap-2 p-4">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 drop-shadow-md"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="font-overpass text-xs font-black uppercase tracking-wider drop-shadow-md">
                  View on Instagram
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14">
          <CtaButton size="md" href={instagramUrl} target="_blank" rel="noopener noreferrer">
            {actionLabel}
          </CtaButton>
        </div>

      </div>
    </section>
  );
}
