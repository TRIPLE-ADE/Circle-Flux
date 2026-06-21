"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

const TESTIMONIALS = [
  {
    quote: "CircleFlux Water consistently delivers the quality our customers expect. The purity, taste, and reliable supply have made it one of the most trusted products in our stores.",
    attribution: "Retail Distributor, Lagos",
  },
  {
    quote: "We have used CircleFlux Water for several corporate and social events, and the feedback is always positive. The packaging is premium, and the quality is exceptional.",
    attribution: "Event Planner, Abuja",
  },
  {
    quote: "Clean drinking water is essential for healthy living, and CircleFlux delivers exactly that. It's refreshing, reliable, and a brand I confidently recommend to my clients.",
    attribution: "Health & Wellness Consultant",
  },
  {
    quote: "What stands out about CircleFlux is their commitment to quality and customer satisfaction. Every delivery arrives on time, and the product quality remains consistently excellent.",
    attribution: "Business owner, Ogun State",
  },
];

const subscribeToReducedMotion = (callback: () => void) => {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
};

const getReducedMotionSnapshot = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Testimonials() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    () => false
  );
  const [autoplay] = useState(() =>
    Autoplay({
      delay: 6000,
      playOnInit: true,
      stopOnFocusIn: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      containScroll: false,
      duration: prefersReducedMotion ? 0 : 32,
      loop: true,
      skipSnaps: false,
      startIndex: 1,
    },
    [autoplay]
  );
  const [selectedIndex, setSelectedIndex] = useState(1);

  const syncSelectedIndex = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", syncSelectedIndex);
    emblaApi.on("reInit", syncSelectedIndex);
    return () => {
      emblaApi.off("select", syncSelectedIndex);
      emblaApi.off("reInit", syncSelectedIndex);
    };
  }, [emblaApi, syncSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    if (prefersReducedMotion) autoplay.stop();
    else autoplay.play();
  }, [autoplay, emblaApi, prefersReducedMotion]);

  const scrollLeft = () => {
    emblaApi?.scrollNext();
    autoplay.reset();
  };

  const scrollRight = () => {
    emblaApi?.scrollPrev();
    autoplay.reset();
  };

  const scrollTo = (index: number) => {
    emblaApi?.scrollTo(index);
    autoplay.reset();
  };

  return (
    <section
      data-testid="testimonials"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
      className="relative z-20 overflow-hidden bg-white px-4 py-16 text-[#1d2428] sm:px-6 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-11 text-center">
          <span className="mb-7 block font-overpass text-[10px] font-black uppercase tracking-[0.04em]">
            Customer Reviews
          </span>
          <h2 className="mx-auto max-w-xl font-overpass text-2xl font-black leading-tight md:text-[34px]">
            Hear what people are saying about us
          </h2>
        </div>

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Testimonial {selectedIndex + 1} of {TESTIMONIALS.length}: {TESTIMONIALS[selectedIndex].attribution}
        </p>

        <div className="relative mx-auto w-full max-w-5xl">
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Move testimonials left"
            className="absolute left-5 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1d2428] shadow-sm transition-transform duration-200 hover:scale-105 active:scale-95 sm:left-8"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={scrollRight}
            aria-label="Move testimonials right"
            className="absolute right-5 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1d2428] shadow-sm transition-transform duration-200 hover:scale-105 active:scale-95 sm:right-8"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div ref={viewportRef} className="overflow-hidden px-2 py-5" data-testid="testimonial-viewport">
            <div className="flex touch-pan-y gap-4 sm:gap-6">
              {TESTIMONIALS.map((testimonial, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <article
                    key={testimonial.attribution}
                    data-testid="testimonial-card"
                    data-active={isSelected ? "true" : "false"}
                    aria-hidden={!isSelected}
                    onClick={() => !isSelected && scrollTo(index)}
                    className={`flex min-h-[230px] w-[280px] shrink-0 flex-col justify-center overflow-hidden rounded-lg border border-white/30 p-7 text-center text-[#1d2428] will-change-transform sm:w-[520px] sm:p-9 ${
                      prefersReducedMotion
                        ? ""
                        : "transition-[background-color,box-shadow,transform] duration-500 ease-out"
                    } ${
                      isSelected
                        ? "relative z-10 scale-100 bg-brand-cyan shadow-[0_22px_42px_rgba(0,165,236,0.18)]"
                        : "scale-[0.94] cursor-pointer bg-brand-yellow shadow-[0_10px_24px_rgba(242,183,5,0.12)]"
                    }`}
                  >
                    <div>
                      <div className="mb-5 flex justify-center gap-1" aria-hidden="true">
                        {[...Array(5)].map((_, starIndex) => (
                          <svg
                            key={starIndex}
                            className={`h-4 w-4 transition-colors duration-500 ${isSelected ? "fill-brand-yellow text-brand-yellow" : "fill-brand-cyan text-brand-cyan"}`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="font-overpass text-sm font-black leading-relaxed text-[#1d2428] sm:text-base md:text-lg">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>
                    <div className="mt-5">
                      <h3 className="font-overpass text-[10px] font-black text-[#1d2428]">{testimonial.attribution}</h3>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2.5">
          {TESTIMONIALS.map((testimonial, index) => (
            <button
              type="button"
              key={testimonial.attribution}
              onClick={() => scrollTo(index)}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${index === selectedIndex ? "bg-brand-red" : "bg-[#dfe4ea]"}`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === selectedIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
