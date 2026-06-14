"use client";

import { TransitionEvent, useCallback, useState, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 0,
      quote: "CircleFlux has been our primary table water supplier for over 2 years. Their delivery is always on time, and our customers frequently comment on how fresh the water tastes.",
      author: "Emeka Obi",
      role: "Supermarket Owner",
    },
    {
      id: 1,
      quote: "We have used Circleflux Water for several corporate and social events, and the feedback is always positive. The packaging is premium, and the quality is exceptional.",
      author: "Patricia Adebayo",
      role: "Operations Manager",
    },
    {
      id: 2,
      quote: "Outstanding water quality! I love the modern, premium look of the bottles. It makes a statement at our events and matches our brand aesthetic perfectly.",
      author: "Funke Balogun",
      role: "Event Planner",
    },
    {
      id: 3,
      quote: "As a health coach, hydration is key for my clients. CircleFlux offers the most balanced natural mineral taste in the market. Absolute purity in every pack.",
      author: "Sarah Alao",
      role: "Fitness & Wellness Coach",
    },
    {
      id: 4,
      quote: "Fantastic customer support and seamless wholesale orders. They handled our emergency order of 200 cases for our convention within 24 hours without delay.",
      author: "Tunde Bakare",
      role: "Logistics Coordinator",
    },
  ];

  const K = 2; // Clone padding count on each side

  // Build the extended list dynamically to support any testimonials list from backend
  const extendedTestimonials = [
    ...testimonials.slice(-K),
    ...testimonials,
    ...testimonials.slice(0, K),
  ];

  const [virtualIndex, setVirtualIndex] = useState(K + 1); // Start at the second real element (Patricia)
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dimensions, setDimensions] = useState({ cardWidth: 520, gap: 24 });

  const getRealIndex = (index: number) => {
    return (index - K + testimonials.length) % testimonials.length;
  };

  const activeIndex = getRealIndex(virtualIndex);

  // Responsive layout tracking
  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 640) {
        setDimensions({ cardWidth: 280, gap: 16 });
      } else {
        setDimensions({ cardWidth: 520, gap: 24 });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTransitionEnabled(true);
    setVirtualIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTransitionEnabled(true);
    setVirtualIndex((prev) => prev - 1);
  };

  const handleDotClick = (idx: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTransitionEnabled(true);
    setVirtualIndex(idx + K);
  };

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") {
      return;
    }

    setIsTransitioning(false);

    if (virtualIndex >= testimonials.length + K) {
      // Reached cloned elements at the right end. Teleport back.
      setTransitionEnabled(false);
      setVirtualIndex((prev) => prev - testimonials.length);
    } else if (virtualIndex < K) {
      // Reached cloned elements at the left end. Teleport forward.
      setTransitionEnabled(false);
      setVirtualIndex((prev) => prev + testimonials.length);
    }
  };

  // Re-enable transition styling using setTimeout to ensure reliability in background/inactive tabs
  useEffect(() => {
    if (!transitionEnabled) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(true);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [transitionEnabled]);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section
      data-testid="testimonials"
      className="py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-white text-[#1d2428] relative overflow-hidden z-20"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-11">
          <span className="text-[10px] font-black uppercase tracking-[0.04em] font-overpass block mb-7">
            Customer Reviews
          </span>
          <h2 className="font-overpass text-2xl md:text-[34px] font-black max-w-xl mx-auto leading-tight text-[#1d2428]">
            Hear what people are saying about us
          </h2>
        </div>

        <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-5 sm:left-8 z-30 w-12 h-12 rounded-full bg-white/75 text-[#1d2428] shadow-sm flex items-center justify-center hover:bg-white active:scale-95 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-5 sm:right-8 z-30 w-12 h-12 rounded-full bg-white/75 text-[#1d2428] shadow-sm flex items-center justify-center hover:bg-white active:scale-95 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="w-full overflow-hidden py-5 px-2 select-none">
            <div
              data-testid="testimonial-track"
              onTransitionEnd={handleTransitionEnd}
              className="relative flex"
              style={{
                left: "50%",
                transform: `translateX(-${(virtualIndex * (dimensions.cardWidth + dimensions.gap)) + dimensions.cardWidth / 2}px)`,
                transition: transitionEnabled ? "transform 650ms cubic-bezier(0.22, 1, 0.36, 1)" : "none",
                width: `${extendedTestimonials.length * (dimensions.cardWidth + dimensions.gap)}px`,
                gap: `${dimensions.gap}px`,
              }}
            >
              {extendedTestimonials.map((test, idx) => {
                const isActive = idx === virtualIndex;
                const TRANSITION = "700ms cubic-bezier(0.22,1,0.36,1)";
                const cardStyle = {
                  width: `${dimensions.cardWidth}px`,
                  backgroundColor: isActive ? "#14aee5" : "#F2B705",
                  boxShadow: isActive
                    ? "0 22px 42px rgba(20, 174, 229, 0.18)"
                    : "0 10px 24px rgba(242, 189, 29, 0.12)",
                  transition: `background-color ${TRANSITION}, box-shadow ${TRANSITION}, transform ${TRANSITION}, opacity ${TRANSITION}`,
                };

                return (
                  <div
                    data-testid="testimonial-card"
                    data-active={isActive ? "true" : "false"}
                    key={`${test.id}-${idx}`}
                    onClick={() => {
                      if (!isActive && !isTransitioning) {
                        setVirtualIndex(idx);
                      }
                    }}
                    style={cardStyle}
                    className={`relative shrink-0 rounded-lg min-h-[220px] p-7 sm:p-9 flex flex-col justify-center text-center text-[#1d2428] border border-white/30 will-change-transform ${
                      isActive
                        ? "scale-100 opacity-100 z-10"
                        : "scale-[0.94] opacity-95 hover:opacity-100 cursor-pointer"
                    }`}
                  >

                    <div>
                      <div className="flex gap-1 justify-center mb-5">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            style={{
                              color: "#F2B705",
                              fill: "#F2B705",
                            }}
                            className="w-4 h-4"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <p className="font-overpass text-sm sm:text-base md:text-lg leading-relaxed font-black">
                        &ldquo;{test.quote}&rdquo;
                      </p>
                    </div>

                    <div className="mt-5">
                      <h4 className="font-overpass font-black text-[10px]">
                        {test.author}
                      </h4>
                      <p
                        style={{ color: "rgba(29,36,40,0.65)" }}
                        className="font-source-sans text-[10px] font-semibold"
                      >
                        {test.role}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        <div className="flex justify-center gap-2.5 mt-5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeIndex ? "bg-brand-red" : "bg-[#eff2f9]"
                }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
